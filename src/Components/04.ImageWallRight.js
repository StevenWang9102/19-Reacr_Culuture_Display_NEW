import React from "react";
import sci01 from "../img/04.imagewall/img6.png";
import sci02 from "../img/04.imagewall/img3.png";
import { PartWord } from "../Components/PartWord";

export const ImageWallRight = (props) => {
  return (
    <section>
      <div className='container-up'>
        <h1>Insight form a Digital Angency</h1>
        <p>APR 07, 2020</p>

        <div className='img-wrapper'>
          <img src={sci01} alt='' />
          <div className='img-hover'></div>
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
