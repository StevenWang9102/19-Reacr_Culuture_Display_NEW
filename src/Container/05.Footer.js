import React from "react";
import arrow from "../img/03.whatwedo/arrow.svg";

export const Footer = (props) => {
  return (
    <section id='footer'>
      
      <div className='typewriter'>
        <h1 id = "letdothis" >Let's Do This.</h1>
        <h2>Start a partnership today</h2>
        <img src={arrow} alt=''/>

      </div>
      
      <hr/>

      <ul>      
        <li>Privacy Policy</li>
        <li>Design by bowen</li>
        <li>Terms and condition</li>
      </ul>
    </section>
  );
};
