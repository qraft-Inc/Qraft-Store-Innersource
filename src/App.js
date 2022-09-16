import React from "react";
import { Musician } from './components/ApplicationForm/Musician';
import { Painter } from './components/ApplicationForm/Painter';
import { Photographer } from './components/ApplicationForm/Photographer';

import './components/style.css';

function App() {
  return (
    <div className="App">
      <Photographer/>
    </div>
  );
}

export default App;
