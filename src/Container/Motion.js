import React from "react";
import modalities from "../img/motion/modalities2.png";


export const Motion = props => {
  return (
    <section id='motion'>
      <img src={modalities} alt=''/>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-10 col-lg-12'>
            <h1>Setting 900+ cities in motion</h1>
            <p className='view-all-city'>View all cities</p>
          </div>
        </div>
      </div>
    </section>
  );
};
