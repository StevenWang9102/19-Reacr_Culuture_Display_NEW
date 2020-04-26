/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CarouselImg } from "./CarouselImg";
import { PreviewButton } from "./PreviewButton";
import { NextButton } from "./NextButton";

export const WhatWeDoLeft = (props) => {

  return (
    <div>
      <h1 name='whatwe'>What we do & love.</h1>
      <h1 name='whatwe'>What we do & love.</h1>

      <CarouselImg/>

      <ul className='control-buttons'>
        <li
          name='whatWeDoPreview'
          onClick={() => {
            if (props.pageNum === 1) {
              props.setPageNum(4);
            } else {
              props.setPageNum(props.pageNum - 1);
            }
          }}>
          PREVIEW
          <PreviewButton />
        </li>
        <li
          name='whatWeDoNext'
          onClick={() => {
            if (props.pageNum === 4) {
              props.setPageNum(1);
            } else {
              props.setPageNum(props.pageNum + 1);
            }
          }}>
          NEXT
          <NextButton />
        </li>
      </ul>
    </div>
  );
};
