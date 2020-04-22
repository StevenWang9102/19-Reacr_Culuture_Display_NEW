import React from 'react';
import "./css/index.scss";
import { NavigationLeft } from "./Container/01.NavigationLeft"
import { Gallery } from "./Container/02.Gallery"
import { WhatWeDo } from "./Container/03.WhatWeDo"
import { ImageWall } from "./Container/04.ImageWall"

function App() {
  return (
    <div className="App">
      <NavigationLeft/>
      <Gallery/>
      <WhatWeDo/>
      <ImageWall/>
    </div>
  );
}

export default App;
