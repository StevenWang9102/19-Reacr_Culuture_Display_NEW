import React from "react";
import slide1 from "../img/02.gallery/slide1.png";
import slide2 from "../img/02.gallery/slide2.png";
import slide3 from "../img/02.gallery/slide3.png";
import slide4 from "../img/02.gallery/slide4.png";

import { useState } from "react";

export const GalleryBlock = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const image=[slide1, slide2, slide3, slide4]

  return (
    <div className='row'>
      <div className='col-sm-6 col-md-6 col-lg-6'>
        <img src={image[pageNum-1]} alt='' />
        <div className='view-project'> VIEW PROJECT 
          <div className='view-project-hover'> </div>
        </div>

        <div className='preview-next'>
          <span
            onClick={() => {
              if (pageNum === 1) {
                setPageNum(4);
              } else {
                setPageNum(pageNum - 1);
              }
            }}>
            PREVIEW
          </span>
          <span>|</span>
          <span
            onClick={() => {
              if (pageNum === 4) {
                setPageNum(1);
              } else {
                setPageNum(pageNum + 1);
              }
            }}>
            NEXT
          </span>
        </div>
      </div>

      <div className='paragraph col-sm-6 col-md-6 col-lg-6'>
        <div className='page'> {pageNum} | 4</div>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};
