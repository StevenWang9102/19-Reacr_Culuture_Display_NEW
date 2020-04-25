import React from "react";
import { ImageWallLeft } from "../Components/04.ImageWallLeft";
import { ImageWallRight } from "../Components/04.ImageWallRight";

export const ImageWall = (props) => {
  return (
    <section id='image-wall'>
      <div className='container'>
        <div className='row'>
          <div className='first-column col-sm-12 col-md-6 col-lg-6'>
            <ImageWallLeft />
          </div>

          <div className='second-column col-sm-12 col-md-6 col-lg-6'>
            <ImageWallRight />
          </div>
        </div>
      </div>
    </section>
  );
};
