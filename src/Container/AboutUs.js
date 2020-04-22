import React from "react";
import profile from "../img/about-us/profile.svg";
import document from "../img/about-us/document.svg";
import home from "../img/about-us/home.svg";
import { AboutUsBlock } from "../Components/AboutUsBlock";

export const AboutUs = props => {
  return (
    <section id='about-us' className='container'>
        <div className='row'>
          <AboutUsBlock
            src={profile}
            title='About us'
            paragraph='Find out how we started, what drives us, and how we’re igniting opportunity.'
          />
          <AboutUsBlock
            src={document}
            title='Newsroom'
            paragraph='See announcements about our latest releases, initiatives, and partnerships.'
          />
          <AboutUsBlock
            src={home}
            title='Global citizenship'
            paragraph='Read about our commitment to making a positive impact in the cities we serve.'
          />
        </div>
      </section>
  );
};
