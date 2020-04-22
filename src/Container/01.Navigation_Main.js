import React from "react";
import video from "../img/video.mp4";
import banner from "../img/01.navigation/navBanner.png";
import { Navigation} from "./01.Navigation"

export const Navigation_Main = (props) => {

  console.log(video);
  
  return (
    <section id='navigation'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-lg-6'>
            <img src={banner} alt='' />
          </div>

            <video id='myVideo' className='video' autoPlay muted loop >
              <source src={video} type='video/mp4' />
              Your browser does not support HTML5 video.
            </video>
        <Navigation/>
          
        </div>
      </div>
    </section>
  );
};
