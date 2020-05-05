/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Page } from "./02.Page";
import { database2 } from "../database";
import { CarouselForTitle } from "./CarouselForTitle";

export const WhatWeDoRight = (props) => {
  return (
    <section>
      <CarouselForTitle content={database2} />

      <p className='paragraph'>
        {database2[props.pageNum - 1] && database2[props.pageNum - 1].paragraph}
      </p>

      <a className='explore-more'>Explore more</a>

      <img name='arrowImage' src='../img/03.whatwedo/arrow.svg' alt='' />

      <div id='bigFloatBall' />

      <Page pageNum={props.pageNum} />
    </section>
  );
};
