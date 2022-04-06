import { useEffect, useState } from "react";
import axios from "axios";
import List from "../../Components/Track/List";
import Navbar from "../../Components/Navbar";
import Track from "../../Components/Track";
import SearchBar from "../../Components/SearchBar";
import CreatePlaylist from "../../Components/CreatePlaylist";
import { convertTime } from "../../Utils/convertTime";
import { setToken, removeToken } from "../../Store/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  BASE_URL_API,
  SEARCH,
  CURRENT_USER_PROFILE,
  USERS,
  PLAYLISTS,
  TRACKS,
} from "../../Config/urlApi";

function SearchPage() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "playlist-modify-private";
  const RESPONSE_TYPE = "token";

  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [user, setUser] = useState([]);
  const [playlistForm, setPlaylistForm] = useState({
    title: "",
    description: "",
  });

  const handleFormChange = (e) => {
    setPlaylistForm({
      ...playlistForm,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  let { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch(setToken(token));

    if (token !== null) {
      setUserProfile(token);
    }
  }, []);

  const setUserProfile = async (token) => {
    const { data } = await axios.get(`${CURRENT_USER_PROFILE}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(data);
  };

  const createPlaylist = async (user_id) => {
    try {
      const response = await axios.post(
        BASE_URL_API + USERS + `/${user_id}` + PLAYLISTS,
        {
          name: playlistForm.title,
          public: false,
          collaborative: false,
          description: playlistForm.description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        return response?.data?.id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addSongsToPlaylist = async (playlist_id) => {
    try {
      const response = await axios.post(
        BASE_URL_API + PLAYLISTS + `/${playlist_id}` + TRACKS,
        {
          uris: selectedTracks.map((song) => song),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const searchTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`${SEARCH}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });
    setResults(data.tracks.items);
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();
    try {
      const id = user.id;
      const playlistId = await createPlaylist(id);
      if (playlistId) {
        const response = await addSongsToPlaylist(playlistId);
        if (response) {
          setPlaylistForm({
            title: "",
            description: "",
          });
          setSelectedTracks([]);
          setResults([]);
          alert("Success");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selectedTracks.includes(uri)) {
      setSelectedTracks(selectedTracks.filter((item) => item !== uri));
    } else {
      setSelectedTracks([...selectedTracks, uri]);
    }
  };

  const logout = () => {
    dispatch(removeToken());
    window.localStorage.removeItem("token");
  };

  const renderTracks = () => {
    return results.map((track, index) => (
      <List
        key={track.id}
        index={index + 1}
        title={track.name}
        artists={track.artists[0].name}
        album={track.album.name}
        image={track.album.images[2].url}
        duration={convertTime(track.duration_ms)}
        buttonSelect={() => toggleSelect(track)}
        textSelect={selectedTracks.includes(track.uri)}
      />
    ));
  };

  return (
    <div>
      <div className="text-white bg-dark pt-4 pb-3">
        <div className="w-100 d-flex justify-content-center">
          <div className="col-md-11 col-12">
            {/* <p className="">Hi, Good morning {user.display_name}</p> */}
          </div>
        </div>
        <Navbar
          menu={
            !token ? (
              <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
              >
                <button className="btn btn-primary">Login</button>
              </a>
            ) : (
              <button className="btn btn-warning" onClick={logout}>
                Logout
              </button>
            )
          }
        />

        <div className="bg-">
          <div className="">
            <div className="w-100 d-flex justify-content-center">
              <div className="col-md-11 col-12">
                {token ? (
                  <div className="">
                    <SearchBar
                      submit={searchTracks}
                      change={(e) => setSearchKey(e.target.value)}
                    />
                    {selectedTracks.length !== 0 && (
                      <CreatePlaylist
                        title={handleFormChange}
                        description={handleFormChange}
                        submit={handleCreatePlaylist}
                      />
                    )}
                  </div>
                ) : null}
                <Track items={renderTracks()} />
                {results.length === 0 && (
                  <h6 className=" text-white text-center">No tracks</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
