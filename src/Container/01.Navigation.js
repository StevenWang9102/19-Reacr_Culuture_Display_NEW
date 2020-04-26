import React from "react";
import { NavigationLeft } from "../Components/01.NavigationLeft";
import { NavigationRight } from "../Components/01.NavigationRight";

export const Navigation = (props) => {
  return (
    <section id='navigation'>
      <div className='container'>
        <div className='row'>
          
          <div className='content col-sm-8 col-md-8 col-lg-8'>
            <NavigationLeft/>
          </div>
          
          <div className='content content2 col-sm-4 col-md-4 col-lg-4'>
            <NavigationRight/>
          </div>
        
        </div>
      </div>
    </section>
  );
};
