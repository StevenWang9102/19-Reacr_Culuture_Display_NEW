import React from "react";
import { database2 } from "../database";

import sci01 from "../img/03.whatwedo/sci01.jpg";
import sci02 from "../img/03.whatwedo/sci02.jpg";
import sci03 from "../img/03.whatwedo/sci01.jpg";
import sci04 from "../img/03.whatwedo/sci02.jpg";

export const Carousel1 = (props) => {

  const image = [sci01, sci02, sci03, sci04];


  return (
    <div
      id='carousel2ExampleControls'
      className='carousel slide'
      data-interval='false'
      data-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>S1
          <img src={sci01} alt='' />
        </div>

        <div className='carousel-item'>S2
          <img src={sci02} alt='' />
        </div>

        <div className='carousel-item'>S3
        <img src={sci02} alt='' />

        </div>

        <div className='carousel-item'>S4 
          <img src={sci02} alt='' />
        </div>
      </div>
    </div>
  );
};
