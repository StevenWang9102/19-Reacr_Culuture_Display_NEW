import React from "react";
import video from "../img/video.mp4";

export const NavigationRight = (props) => {
  return (
    <section id='navigationRight'>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Champion</li>
        <li>About us</li>
      </ul>

      <video id='myVideo' className='video' autoPlay muted loop>
        <source src={video} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
};
