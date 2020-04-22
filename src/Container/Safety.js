import React from "react";
import screen from "../img/safety/safety-screen.png";

export const Safety = props => {
  return (
    <section id='safety' className='container'>
        <div className='row'>
          <div className='first-column col-sm-12 col-md-6 col-lg-6'>
            <h1>Our commitment to your safety</h1>
            <article>
              <p>
                With every safety feature we add and every standard in our
                Community Guidelines we uphold, we're committed to working to
                create a safe environment for our users.
              </p>
              <p>
                Learn more about our Community Guidelines
              </p>
              <p>See all safety features</p>
              </article>
          </div>

          <div className='second-column col-sm-12 col-md-6 col-lg-6'>
            <img src={screen} alt=''/>
          </div>
        </div>
      </section>
  );
};
