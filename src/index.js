import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Player } from './App.js';
import { tracks } from './assets/song.metadata.assets.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Player trackList={tracks} />
  </React.StrictMode>
);
