import React, { useState, useEffect } from "react";
import data from "../Data/data";
import FileData from "../FileData";

const axios = require("axios");

function BerandaData() {
  const CLIENT_ID = "6d9856e8891e484daef25ca2d342ebed";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [access_token, set_access_token] = useState(null);
  const [query, set_query] = useState("");
  const [tracks, set_tracks] = useState([]);

  const Form = () => {
    return (
      <div className="w-100 d-flex justify-content-center">
        <div className="col-md-4 col-12 d-flex justify-content-center p-1">
          <input
            onChange={(event) => {
              set_query(event.target.value);
            }}
            value={query}
            type="text"
            className=" form-control mx-2 "
          ></input>

          <button
            onClick={() => {
              handleClick();
            }}
            className="btn btn-primary mx-2 "
          >
            Search
            {/* <i className=""></i> */}
          </button>
        </div>
      </div>
    );
  };

  function handleClick() {
    try {
      let url =
        "https://api.spotify.com/v1/search?q=" + query + "&type=track,artist";
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        })
        .then((res) => {
          set_tracks(res.data.tracks.items);
        });
    } catch (err) {
      console.error(err);
    } finally {
      console.log(tracks);
    }
  }

  const Track = (props) => {
    return (
      <div className="bg-spotify_card px-5 py-5 rounded w-1/5 mr-4 mb-4 cursor-pointer hover:bg-spotify_card_hover">
        <img
          src={props.image_url}
          title={props.album_name}
          alt="{props.album_name}"
          className="object-cover rounded h-40 w-full"
        />
        <p className="text-base mt-2 mb-1 font-bold text-gray-100">
          {props.track_title}
        </p>
        <div className="">
          <p className="text-sm text-gray-300">{props.artist_name}</p>
        </div>
      </div>
    );
  };

  function getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
  });

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
  });

  return (
    <div className="color-album">
      <div className="w-100 d-flex justify-content-center">
        <div className="">
          <h3 className=" text-center pt-4 pb-2">
            <b>All Album</b>
          </h3>
          <div className="w-100 d-flex justify-content-center">
            <p className="text-center col-md-8 col-11">
              Anda dapat menemukan kumpulan lagu sesuai genre anda, dengan
              mendengarkan lagu anda bisa merasakan relax
            </p>
          </div>
        </div>
      </div>
      <div className="w-100  d-flex justify-content-center  ">
        {!access_token && (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className="btn btn-success text-center"
          >
            Login to Spotify
          </a>
        )}
      </div>

      {access_token && <Form />}
      <div className=" row-cols-md-3 container-fluid pb-5">
        <div className="w-100  justify-content-center col-md-11 align-items-center">
          {tracks.map((dataItem) => (
            <div key={data.id}>
              {/* <Track */}
              <FileData
                url={dataItem.album.images[0].url}
                title={dataItem.album.name}
                name={dataItem.album.artists[0].name}
                durasi={dataItem.duration_ms}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BerandaData;
