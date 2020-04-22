import React from "react";
import { database2 } from "../database";

export const Carousel = (props) => {
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide'
      data-interval='false'
      data-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          {props.fromPage === "title" && (
            <h1 name='title'>{props.content && props.content[0].title}</h1>
          )}
          {props.fromPage === "whatwe-img" && (
            <h1>测试</h1>
          )}
        </div>

        <div className='carousel-item'>
          {props.fromPage === "title" && (
            <h1 name='title'>{props.content && props.content[1].title}</h1>
          )}
          {props.fromPage === "whatwe-img" && (
            <h1>测试</h1>
            )}
        </div>

        <div className='carousel-item'>
          {props.fromPage === "title" && (
            <h1 name='title'>{props.content && props.content[2].title}</h1>
          )}
          {props.fromPage === "whatwe-img" && (
            <h1>测试</h1>
            )}
        </div>
      </div>
    </div>
  );
};
