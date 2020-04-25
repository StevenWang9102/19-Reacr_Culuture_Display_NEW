import React from "react";
// import { createUseStyles } from "react-jss";
import sci01 from "../img/03.whatwedo/sci01.jpg";
import sci02 from "../img/03.whatwedo/sci02.jpg";
import { PartWord } from "../Components/PartWord";

export const ImageWallRight = (props) => {
  return (
    <section>
      <div className='container-up'>
        <h1>Insight form a Digital Angency</h1>
        <p>APR 07, 2020</p>

        <div className='img-wrapper'>
          <img src={sci01} alt='' />
          <div className='hover-on-right'></div>
        </div>

        <PartWord title='Read More Articles' />
      </div>

      <div className='container-low'>
        <h1>Insight form a Digital Angency</h1>
        <p>APR 07, 2020</p>
        <img src={sci02} alt='' />
      </div>
    </section>
  );
};