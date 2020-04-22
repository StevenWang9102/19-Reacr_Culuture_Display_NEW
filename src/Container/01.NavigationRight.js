import React from "react";
import video from "../img/video.mp4";

export const Navigation = (props) => {

  return (
    <section id='navigationRight'>
      <div className='container'>
        <div className='row'>
          <div className='content col-sm-8 col-md-8 col-lg-6'>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Champion</li>
              <li>About up</li>
            </ul>

            <video id='myVideo' className='video' autoPlay muted loop>
            <source src={video} type='video/mp4' />
            Your browser does not support HTML5 video.
            </video>

          </div>
        </div>
      </div>
    </section>
  );
};
