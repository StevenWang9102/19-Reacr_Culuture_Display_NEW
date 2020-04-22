import React from "react";
import { GalleryBlock } from "../Components/02.GalleryBlock";
import { database } from "../database";

export const Gallery = (props) => {
  return (
    <section id='gallery'>
      <div className='container'>
        {database.map((n, index) => {
          return (
            // <div key={index}>
              <GalleryBlock
                index={index}
              />
            // </div>
          );
        })}
      </div>
    </section>
  );
};
