import React from "react";
import { useState } from "react";
import { database2 } from "../database";
import { Carousel } from "../Components/Carousel";
import { Carousel1 } from "../Components/Carousel1";
import { PreviewButton } from "../Components/PreviewButton";
import { NextButton } from "../Components/NextButton";


export const WhatWeDo = (props) => {
  const [pageNum, setPageNum] = useState(1);

  return (
    <section id='what-we-do'>
      <div className='container'>
        <div className='row'>
          {/* --------------- ONE --------------- */}
          <div className='first-column col-sm-8 col-md-8 col-lg-8'>
            <h1 name='whatwe'>What we do & love.</h1>
            <h1 name='whatwe'>What we do & love.</h1>

            <div className="img-container">
              <Carousel1
                fromPage ="whatwe-img"
              />
            </div>
            
            <ul className='control-buttons'>
              <li
                onClick={() => {
                  if (pageNum === 1) {
                    setPageNum(4);
                  } else {
                    setPageNum(pageNum - 1);
                  }
                }}>
                PREVIEW
                <PreviewButton/>
              </li>
              <li
                name='what-we-do-next'
                onClick={() => {
                  if (pageNum === 4) {
                    setPageNum(1);
                  } else {
                    setPageNum(pageNum + 1);
                  }
                }}>
                NEXT
                <NextButton/>
              </li>
            </ul>
          </div>

          {/* --------------- SECOND --------------- */}
          <div className='second-column col-sm-8 col-md-4 col-lg-4'>
            <div className='page'> {pageNum} | 4</div>

            <div className='h1-container'>
              <Carousel
                fromPage= "title"
                content = {database2}  
              />
            </div>

            <p>{database2[pageNum - 1].paragraph}</p>

            <a href='#top'>explore more</a>

            <div className='float-ball'> </div>
          </div>
        </div>
      </div>
    </section>
  );
};
