import React from "react";
import { Musician } from './components/ApplicationForm/Musician';
import { Painter } from './components/ApplicationForm/Painter';
import { Photographer } from './components/ApplicationForm/Photographer';
import {MusicianApplication} from './components/ApplicationForm/MusicianApplication'
// import {MusicianBio} from './components/ApplicationForm/MusicianBio'

import './App.css';

function App() {
  return (
    <div className="App">
      <Musician/>
    </div>
  );
}

export default App;
