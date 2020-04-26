/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Page } from "./Page";
import { database2 } from "../database";
import { CarouselTitle } from "./CarouselTitle";

export const WhatWeDoRight = (props) => {
  // const [pageNum, setPageNum] = useState(1);

  console.log(props.pageNum);
  
  return (
    <div>
      <Page pageNum={props.pageNum} />

      <CarouselTitle fromPage='title' content={database2} />

      <p className="paragraph">{database2[props.pageNum - 1] && database2[props.pageNum - 1].paragraph}</p>

      <a className='explore-more'>Explore more</a>

      <div className='float-ball'> </div>
    </div>
  );
};
