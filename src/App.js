import React from 'react';
import "./css/index.scss";
import { Navigation_Main as NavigationMain } from "./Container/01.Navigation_Main"
// Gallery
import { Gallery } from "./Container/02.Gallery"


function App() {
  return (
    <div className="App">
      <NavigationMain/>
      <Gallery/>
    </div>
  );
}

export default App;
