import React from "react";
// import { createUseStyles } from "react-jss";
import sci01 from "../img/03.whatwedo/sci01.jpg";
import sci02 from "../img/03.whatwedo/sci02.jpg";
import img1 from "../img/04.imagewall/img1.png";

// const backgroundImage = [
//   "linear-gradient(to top right, #2e7da1, #031e2b)",
//   "linear-gradient(to top right, #a932d8, #1c0b3b)",
//   "linear-gradient(to top right, #7bc5b6, #5926b9)",
//   "linear-gradient(to top right, #b2d85a, #022c02)"
// ]

// const useStyles = createUseStyles({
//   backgrounds: {
//     backgroundImage: props => props && props.backgrounds,
//   }
// });


// const ImageWallLayout = ({ children , ...props }) => {
//   const classes = useStyles(props);
//   return (
//     <div className={`${classes.backgrounds}`}>{children}</div>
//   );
// };

// ImageWallLayout.defaultProps = {
//   backgrounds: {
//     backgroundImage: "linear-gradient(to top right, #2e7da1, #031e2b)",
//   }
// }
export const ImageWall = (props) => {
  return (
    // <ImageWallLayout  backgrounds={backgroundImage[2]}>
    <section id='image-wall'>
      <div className='container'>
        <div className='row'>
          <div className='first-column col-sm-6 col-md-6 col-lg-6'>
            <div className='container-up'>
              <h1>Latest from Bowen.</h1>
              <h2>Latest from Bowen.</h2>
            </div>

            <div className='container-low'>
                <img src={img1} alt='' name='hoverImg' />
                {/* <div className='hoverBox'>
                  <li>#BROWNS</li>
                  <li>#ENJOY</li>
                  <li>#INTERACTION</li>
                </div> */}

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
            <div className='container-up'>
                <h1>Insight form a Digital Angency</h1>
                <p>APR 07, 2020</p>
                <img src={sci01} alt='' />
                {/* <div className='hover-on-right'>
                  <h2>Read M<span>ore Article</span>
                  </h2>
                </div> */}
            </div>

            <div className='container-low'>
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
