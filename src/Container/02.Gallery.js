import React from "react";
import { useState } from "react";
import { database } from "../database";
import slide1 from "../img/02.gallery/slide1.png";
import slide2 from "../img/02.gallery/slide2.png";
import slide3 from "../img/02.gallery/slide3.png";
import slide4 from "../img/02.gallery/slide4.png";


export const Gallery = (props) => {

  const [pageNum, setPageNum] = useState(1);
  const image = [slide1, slide2, slide3, slide4];

  return (
    <section id='gallery'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-6'>

            {/* ----------------  IMG -------------- */}
            <div className='img-container'>
              <img src={image[pageNum - 1]} className='gallery-img' alt='' />
            </div>

            <div className='view-project'>
              VIEW PROJECT
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
                className='Next'
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

            {/* ----------------  PAGE -------------- */}
          <div className='paragraph col-sm-6 col-md-6 col-lg-6'>
            <div className='page'> {pageNum} | 4</div>
            <h1>{database[pageNum - 1].title}</h1>
            <p>{database[pageNum - 1].paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
