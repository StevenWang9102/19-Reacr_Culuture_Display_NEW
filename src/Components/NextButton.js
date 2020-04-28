/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const NextButton = (props) => {
  return (
    <div
      className='carousel-control-next'
      href='#titleCarousel'
      role='button'
      data-slide='next'>
      <span
        className='carousel-control-next2'
        href='#imgCarousel'
        role='button'
        data-slide='next'></span>
    </div>
  );
};