import React from "react";
import "./css/index.scss";
import { Navigation } from "./Container/01.Navigation";
import { Gallery } from "./Container/02.Gallery";
import { WhatWeDo } from "./Container/03.WhatWeDo";
import { ImageWall } from "./Container/04.ImageWall";
import { Footer } from "./Container/05.Footer";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Gallery />
      <WhatWeDo />
      <ImageWall />
      <Footer />
    </div>
  );
}

export default App;
