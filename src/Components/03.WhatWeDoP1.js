/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Carousel1 } from "./Carousel1";
import { PreviewButton } from "./PreviewButton";
import { NextButton } from "./NextButton";

export const WhatWeDoP1 = (props) => {

  return (
    <div>
      <h1 name='whatwe'>What we do & love.</h1>
      <h1 name='whatwe'>What we do & love.</h1>

      <Carousel1 fromPage='whatwe-img' />

      <ul className='control-buttons'>
        <li
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
          name='what-we-do-next'
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
