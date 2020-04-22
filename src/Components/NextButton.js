/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const NextButton = (props) => {
  return (
    <a
      className='carousel-control-next'
      href='#carouselExampleControls'
      role='button'
      data-slide='next'>
      <a
        className='carousel-control-next2'
        href='#carousel2ExampleControls'
        role='button'
        data-slide='next'></a>
    </a>
  );
};
