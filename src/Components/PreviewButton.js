/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const PreviewButton = (props) => {
  return (
    <li
      name='whatWeDoPreview'
      className='carousel-control-prev'
      href='#imgCarousel'
      role='button'
      data-slide='prev'
      onClick={() => props.setPageNum(props.pageNum === 1 ? 4: props.pageNum - 1)}
      >
        PREVIEW
    </li>
  );
};
