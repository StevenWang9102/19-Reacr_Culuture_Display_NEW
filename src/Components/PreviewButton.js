/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const PreviewButton = (props) => {
  return (
    <div
      name='whatWeDoPreview'
      className='carousel-control-prev'
      href='#titleCarousel'
      role='button'
      data-slide='prev'
      onClick={() => props.setPageNum(props.pageNum === 1 ? 4: props.pageNum - 1)}
      >
      <span
        className='carousel-control-prev1'
        href='#imgCarousel'
        role='button'
        data-slide='prev'>PREVIEW
      </span>
    </div>
  );
};
