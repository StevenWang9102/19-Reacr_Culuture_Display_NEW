import React from "react";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import { database } from "../database";
import { HalfWord } from "../Components/02.HalfWord";
import { Page } from "../Components/02.Page";
import { ViewProjectButton } from "../Components/02.ViewProjectButton";
import { GalleryButtons } from "../Components/02.GalleryButtons";

const slogans = ["ONE", "TWO", "THREE", "FOUR"];

const backgroundImage = [
  "linear-gradient(to top right, #2e7da1, #031e2b)",
  "linear-gradient(to top right, #a932d8, #1c0b3b)",
  "linear-gradient(to top right, #7bc5b6, #5926b9)",
  "linear-gradient(to top right, #b2d85a, #022c02)",
];

const useStyles = createUseStyles({
  backgrounds: {
    backgroundImage: (props) => props && props.backgrounds,
  },
});

const GalleryLayout = ({ children, ...props }) => {
  const classes = useStyles(props);
  return (
    <section id='gallery' className={`${classes.backgrounds}`}>
      {children}
    </section>
  );
};

GalleryLayout.defaultProps = {
  backgrounds: {
    backgroundImage: "linear-gradient(to top right, #2e7da1, #031e2b)",
  },
};

const image = [
  "../img/02.gallery/slide1.png",
  "../img/02.gallery/slide2.png",
  "../img/02.gallery/slide3.png",
  "../img/02.gallery/slide4.png",
];

export const Gallery = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const [imageSrc1, setImageSrc1] = useState(image[pageNum - 1]);
  const [imageSrc2, setImageSrc2] = useState(image[pageNum - 1]);

  return (
    <GalleryLayout backgrounds={backgroundImage[pageNum - 1]}>
      <div className='container '>
        <div className='row'>
          {/* ----------------  Column One -------------- */}
          <div className='column-one col-sm-6 col-md-6 col-lg-6'>
            <h1 name='slogan'>{slogans[pageNum - 1]}</h1>
            <div className='gallery-img-container'>
              <img src={imageSrc1} className='gallery-img' alt='' />
              <img src={imageSrc2} className='gallery-img gallery-img2' alt='' />
            </div>
          </div>

          {/* ----------------  Column Two -------------- */}
          <div className='column-two col-sm-6 col-md-6 col-lg-6'>
            <h2> FEATURED SERVICE </h2>
            <Page pageNum={pageNum} />
            <HalfWord title={database[pageNum - 1].title} />
            <p className='paragraph'>{database[pageNum - 1].paragraph}</p>
          </div>
        </div>

        {/* --------------- Column Three ------------- */}
        <div className='column-three row'>
          <ViewProjectButton />
          <GalleryButtons
            image={image}
            pageNum={pageNum}
            setPageNum={(pageNum)=>setPageNum(pageNum)}
            setImageSrc1={(pageNum)=>setImageSrc1(pageNum)}
            setImageSrc2={(pageNum)=>setImageSrc2(pageNum)}
          />
        </div>
      </div>
    </GalleryLayout>
  );
};
