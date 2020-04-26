/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const PreviewButton = (props) => {
  return (
    <div
      className='carousel-control-prev'
      href='#titleCarousel'
      role='button'
      data-slide='prev'>
      <span
        className='carousel-control-prev1'
        href='#imgCarousel'
        role='button'
        data-slide='prev'>
      </span>
    </div>
  );
};
