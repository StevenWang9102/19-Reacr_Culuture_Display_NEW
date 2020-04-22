import React from "react";
import logo from "../img/01.navigation/logo0.png";
import { Navigation } from "./01.NavigationRight";

export const NavigationLeft = (props) => {
  return (
    <section id='navigationLeft'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-6'>
            <img src={logo} alt='' />
          </div>
          <Navigation />
        </div>
      </div>
    </section>
  );
};
