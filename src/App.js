import React from 'react';
import "./css/index.scss";
import { Navigation_Main as NavigationMain } from "./Container/01.Navigation_Main"
import { Gallery } from "./Container/02.Gallery"
import { WhatWeDo } from "./Container/03.WhatWeDo"
import { ImageWall } from "./Container/04.ImageWall"

function App() {
  return (
    <div className="App">
      <NavigationMain/>
      <Gallery/>
      <WhatWeDo/>
      <ImageWall/>
    </div>
  );
}

export default App;