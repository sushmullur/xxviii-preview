import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Player } from './App.js';

const tracks = [
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/I+Intro+ft+Ajay+Sandhu.wav", 
    title: "I. Intro ft. Ajay Sandhu",
    tags: ["narration"],
  },
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/II+Centurion.wav",
    title: "II. Centurion",
    tags: ["rap"],
  },
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/III+Right+Next+To+Me.wav",
    title: "III. Right Next To Me",
    tags: ["pop"],
  },
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/IV+It's+Just+Me.wav",
    title: "IV. It's Just Me",
    tags: ["hyper-pop"],
  },
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/VII+Keep+Beatin+ft+Galaxy+Meka.wav", 
    title: "VII. Keep Beatin ft. Galaxy Meka",
    tags: ["rap"],
  },
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/XI+Don't+You+Give+Up+ft+Ajay.wav",
    title: "XI. Don't You Give Up ft. Ajay Sandhu",
    tags: ["narration"],
  },
  {
    url: "https://xxviiibucket.s3.us-west-2.amazonaws.com/XIV+Outro.wav",
    title: "XIV. Outro",
    tags: ["instrumental"],
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Player trackList={tracks} />
  </React.StrictMode>
);
