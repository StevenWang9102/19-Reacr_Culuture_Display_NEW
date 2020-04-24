import React from "react";
import { database2 } from "../database";

import sci01 from "../img/03.whatwedo/sci01.jpg";
import sci02 from "../img/03.whatwedo/sci02.jpg";

export const Carousel1 = (props) => {

  return (
    <div
      id='carousel2ExampleControls'
      className='carousel slide'
      data-interval='false'
      data-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={sci01} alt='' />
        </div>

        <div className='carousel-item'>
          <img src={sci02} alt='' />
        </div>

        <div className='carousel-item'>
        <img src={sci02} alt='' />

        </div>

        <div className='carousel-item'>
          <img src={sci02} alt='' />
        </div>
      </div>
    </div>
  );
};
