import React from "react";
import { useState } from "react";
import { BannerBlock } from "../Components/BannerBlock";
import { InformationDisplay as Information } from "../Components/InformationDisplay";
import Earn from "../../src/img/banner/01.Earn.svg";
import Ride from "../../src/img/banner/06.Transit.svg";
import Eat from "../../src/img/banner/03.Eat.svg";
import Freight from "../../src/img/banner/04.Freight.svg";
import Business from "../../src/img/banner/05.Business.svg";
import Transit from "../../src/img/banner/06.Transit.svg";
import Bike from "../../src/img/banner/07.Bike2.svg";
import Fly from "../../src/img/banner/08.Fly.svg";
import myBackGround from "../../src/img/banner/BackGround.png";
import { database } from "../database";

export const Banner = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [background, setBackground] = useState(myBackGround);
  const imageArray = [Earn, Ride, Eat, Freight, Business, Transit, Bike, Fly];

  return (
    <section id='banner'>
      <img src={background} alt='' />
      <div className='banner-table-container'>
        {imageArray.map((src, index) => {
          return (
            <BannerBlock
              key={index}
              src={src}
              index={index}
              checked={currentIndex === index ? true : false}
              setBackground={(index) => setBackground(index)}
              setCurrentIndex={(index) => setCurrentIndex(index)}
              title={database[index].tagName}
            />
          );
        })}
      </div>
      <Information currentIndex={currentIndex} />
    </section>
  );
};
