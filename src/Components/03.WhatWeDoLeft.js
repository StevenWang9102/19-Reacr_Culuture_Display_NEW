/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CarouselForImage } from "./CarouselForImage";
import { PreviewButton } from "./PreviewButton";
import { NextButton } from "./NextButton";

export const WhatWeDoLeft = (props) => {
  return (
    <div>
      <h1 name='whatwe'>Our belief & love.</h1>
      <h1 name='whatwe'>Our belief & love.</h1>

      {/* ---------------- Carousel ------------------- */}
      <CarouselForImage />

      <div className='control-buttons'>
        <PreviewButton
          pageNum={props.pageNum}
          setPageNum={(num) => props.setPageNum(num)}
        />

        <NextButton
          pageNum={props.pageNum}
          setPageNum={(num) => props.setPageNum(num)}
        />
      </div>
    </div>
  );
};
