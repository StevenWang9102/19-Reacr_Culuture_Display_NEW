import React from "react";

export const CarouselForTitle = (props) => {
  return (
    <section
      id='titleCarousel'
      className='carousel slide'
      data-interval='false'
      data-ride='carousel'>

      <section className='carousel-inner'>

        <div className='carousel-item active'>
            <h1 name='title'>{props.content && props.content[0].title}</h1>
        </div>

        <div className='carousel-item'>
            <h1 name='title'>{props.content && props.content[1].title}</h1>
        </div>

        <div className='carousel-item'>
            <h1 name='title'>{props.content && props.content[2].title}</h1>
        </div>
        
        <div className='carousel-item'>
            <h1 name='title'>{props.content && props.content[3].title}</h1>
        </div>

      </section>
    </section>
  );
};
