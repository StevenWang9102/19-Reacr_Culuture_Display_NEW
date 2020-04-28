import React from "react";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import { database } from "../database";
import { PartWord } from "../Components/PartWord";
import { Page } from "../Components/Page";
import { ViewProjectButton } from "../Components/ViewProjectButton";
import { GalleryButtons } from "../Components/GalleryButtons";
import slide1 from "../img/02.gallery/slide1.png";
import slide2 from "../img/02.gallery/slide2.png";
import slide3 from "../img/02.gallery/slide3.png";
import slide4 from "../img/02.gallery/slide4.png";


const slogans = ["ONE", "TWO", "THREE", "FOUR"]
const backgroundImage = [
  "linear-gradient(to top right, #2e7da1, #031e2b)",
  "linear-gradient(to top right, #a932d8, #1c0b3b)",
  "linear-gradient(to top right, #7bc5b6, #5926b9)",
  "linear-gradient(to top right, #b2d85a, #022c02)"
]

const useStyles = createUseStyles({
  backgrounds: {
    backgroundImage: props => props && props.backgrounds,
  }
});


const GalleryLayout = ({ children , ...props }) => {
  const classes = useStyles(props);
  return (
    <div id='gallery' className={ `${classes.backgrounds}`}>{children}</div>
  );
};

GalleryLayout.defaultProps = {
  backgrounds: {
    backgroundImage: "linear-gradient(to top right, #2e7da1, #031e2b)",
  }
}

export const Gallery = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const image = [slide1, slide2, slide3, slide4];

  return (
    <section >

    <GalleryLayout backgrounds={backgroundImage[pageNum-1]}>
        <div className='container '>
          <div className='row gallery-row'>
            
            {/* ----------------  Column One -------------- */}
            <div className='column-one col-sm-6 col-md-6 col-lg-6'>
              <h1>{slogans[pageNum-1]}</h1>
              <img src={image[pageNum - 1]} className='gallery-img' alt='' />
              <div></div>
            </div>

            {/* ----------------  Column Two -------------- */}
            <div className='column-two  col-sm-6 col-md-6 col-lg-6'>
              <h5> FEATURED PROJECT </h5>
              <Page pageNum={pageNum} />
              <PartWord title={database[pageNum - 1].title} />
              <p className="paragraph">{database[pageNum - 1].paragraph}</p>
            </div>
          </div>

          {/* --------------- Column Three ------------- */}
          <div className='column-three row'>
            <ViewProjectButton/>
            <GalleryButtons
              pageNum ={pageNum}
              setPageNum={setPageNum}
            />
          </div>
        </div>
    </GalleryLayout>
    </section>
  );
};
