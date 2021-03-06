import { useEffect, useState } from "react";
import axios from "axios";
import List from "../../Components/Track/List/index";
import Track from "../../Components/Track";
import SearchBar from "../../Components/SearchBar";
import AddPlaylist from "../../Components/AddPlaylist";
import { convertTime } from "../../Utils/convertTime";
import { useSelector } from "react-redux";
import {
  BASE_URL_API,
  SEARCH,
  CURRENT_USER_PROFILE,
  USERS,
  PLAYLISTS,
  TRACKS,
} from "../../Config/urlApi";
import LandingPage from "../LandingPage";

function CreatePlaylist() {
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

  let { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token !== null) {
      setUserProfile(token);
    }
  }, [token]);

  const setUserProfile = async (token) => {
    const { data } = await axios.get(CURRENT_USER_PROFILE, {
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
    const { data } = await axios.get(SEARCH, {
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
        <div className="">
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
                      <AddPlaylist
                        title={handleFormChange}
                        description={handleFormChange}
                        submit={handleCreatePlaylist}
                      />
                    )}
                  </div>
                ) : null}
                <Track items={renderTracks()} />
                {results.length === 0 && (
                  // <h3 className="text-white text-center">No tracks</h3>
                  <LandingPage />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
