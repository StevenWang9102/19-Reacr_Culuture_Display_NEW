import React from "react";
import sci02 from "../img/03.whatwedo/sci02.jpg";
import sci03 from "../img/03.whatwedo/sci03.jpg";
import sci04 from "../img/03.whatwedo/sci04.jpg";

export const CarouselImg = (props) => {
  return (
    <div
      id='imgCarousel'
      className='carousel slide'
      data-interval='false'
      data-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={sci02} alt='' />
        </div>

        <div className='carousel-item'>
          <img src={sci03} alt='' />
        </div>

        <div className='carousel-item'>
          <img src={sci04} alt='' />
        </div>

      </div>
    </div>
  );
};
