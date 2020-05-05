import React from "react";

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
        <source src='../img/01.navigation/video2.mp4' type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
};
