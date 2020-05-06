/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const NextButton = (props) => {
  return (
    <li
      name='whatWeDoNext'
      className='carousel-control-next'
      href='#imgCarousel'
      role='button'
      data-slide='next'
      onClick={() => props.setPageNum(props.pageNum === 4 ? 1: props.pageNum + 1)}
      >
      NEXT
    </li>
  );
};
