/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Page } from "./Page";
import { database2 } from "../database";
import arrow from "../img/03.whatwedo/arrow.svg";
import { CarouselTitle } from "./CarouselTitle";

export const WhatWeDoRight = (props) => {
  
  return (
    <div>
      <Page pageNum={props.pageNum} />

      <CarouselTitle fromPage='title' content={database2} />

      <p className="paragraph">{database2[props.pageNum - 1] && database2[props.pageNum - 1].paragraph}</p>

      <a className='explore-more'>Explore more  
      </a>
      
      <img name='arrowImage' src={arrow} alt=''/>

      <div id= 'bigFloatBall'/>
    
    </div>
  );
};
