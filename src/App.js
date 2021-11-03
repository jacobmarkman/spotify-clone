import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { Player } from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user,
        });
      })
    }

    console.log('I HAVE A TOKEN>>> ', token);
  }, []);

  console.log("Dii", user);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
}

export default App;
