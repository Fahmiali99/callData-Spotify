import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CreatePlaylist from "./Pages/CreatePlaylist";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setToken, removeToken } from "./Store/auth";
import "./App.css";

function App() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "playlist-modify-private";
  const RESPONSE_TYPE = "token";
  const openData = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

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
  }, []);

  const logout = () => {
    dispatch(removeToken());
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="bg-dark ">
        <Navbar
          menu={
            !token ? (
              <a href={openData}>
                <button className="btn btn-primary text-light">Login</button>
              </a>
            ) : (
              <button className="btn btn-warning text-light" onClick={logout}>
                Logout
              </button>
            )
          }
        />
        <Switch>
          <Route exact path="/">
            {token ? (
              <Redirect exact from="/" to="/create-playlist" />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route path="/create-playlist">
            {!token ? (
              <Redirect exact from="/create-playlist" to="/" />
            ) : (
              <CreatePlaylist />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
