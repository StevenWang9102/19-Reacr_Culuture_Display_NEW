import React from "react";

export const ImageWallRight = (props) => {
  return (
    <div id="ImageWallRight">
      <section className='container-up'>
        <h1 id="hoverh1">New Workplace Built</h1>
        <p>APR 07, 2020</p>

        <div className='img-wrapper'>
          <img className = "img1" src='../img/04.imagewall/img6.png' alt='' />
          <div className='img-hover'></div>
        </div>

      </section>

      <section className='container-low'>
        <h1>Corporate Team Building Activities </h1>
        <p>Mar 24, 2020</p>
        <img src='../img/04.imagewall/img3.png'alt='' />
      </section>
    </div>
  );
};
