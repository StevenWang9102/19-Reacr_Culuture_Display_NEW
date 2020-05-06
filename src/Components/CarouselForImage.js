import React from "react";


export const CarouselForImage = (props) => {
  return (
    <section
      id='imgCarousel'
      className='carousel slide'
      data-interval='false'
      data-ride='carousel'>
        
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src='../img/03.whatwedo/sci02.jpg' alt='' />
        </div>

        <div className='carousel-item'>
          <img src='../img/03.whatwedo/sci03.jpg' alt='' />
        </div>

        <div className='carousel-item'>
          <img src='../img/03.whatwedo/sci04.jpg' alt='' />
        </div>

        <div className='carousel-item'>
          <img src='../img/03.whatwedo/sci01.jpg' alt='' />
        </div>

      </div>
    </section>
  );
};
