import React from "react";
import sci01 from "../img/03.whatwedo/sci01.jpg";
import sci02 from "../img/03.whatwedo/sci02.jpg";
import img1 from "../img/04.imagewall/img1.png";

export const ImageWall = (props) => {
  return (
    <section id='image-wall'>
      <div className='container'>
        <div className='row'>
          <div className='first-column col-sm-6 col-md-6 col-lg-6'>
            <div className='container-one'>
              <h1>Latest from Bowen.</h1>
              <h2>Latest from Bowen.</h2>
            </div>

            <div className='container-two'>
              <div className='img-wrapper'>
                <img src={img1} alt='' name='hoverImg' />
                <div className='hoverBox'>
                  <li>#BROWNS</li>
                  <li>#ENJOY</li>
                  <li>#INTERACTION</li>
                </div>
              </div>

              <h3>A Glimpse of Q2 2020</h3>
              <p>
                We just launched a new custom website and digital marketing
                campaign for a leading self-storage company, we're developing a
                brand identity and custom website for a National non-profit, and
                using automation and advanced API integrations to elevate a
                leading Long Island residential real estate firm.
              </p>
            </div>
          </div>

          <div className='second-column col-sm-6 col-md-6 col-lg-6'>
            <div className='container-one'>
              <div className='img-wrapper'>
                <h1>Insight form a Digital Angency</h1>
                <p>APR 07, 2020</p>
                <img src={sci01} alt='' />
                <div className='hover-on-right'>
                  <h2>Read M<span>ore Article</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className='container-two'>
              <h1>Insight form a Digital Angency</h1>
              <p>APR 07, 2020</p>
              <img src={sci02} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
