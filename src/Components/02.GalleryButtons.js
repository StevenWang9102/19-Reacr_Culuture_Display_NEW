import React from "react";

export const GalleryButtons = ({ image, pageNum, setPageNum, setImageSrc }) => {
  return (
    <section id='galleryButtons'>
      <div
        id='galleryButtonsPreview'
        className='PreviewButton'
        onClick={() => {
          setPageNum(pageNum === 1 ? 4 : pageNum + 1);
          setTimeout(() => setImageSrc(image[pageNum === 1? 4: pageNum]), 700);
        }}>
        PREVIEW
      </div>

      <span>|</span>

      <div
        id='galleryButtonsNext'
        className='NextButton'
        onClick={() => {
          setPageNum(pageNum === 4 ? 1 : pageNum + 1);
          setTimeout(() => setImageSrc(image[pageNum === 4?1: pageNum]), 650);
        }}>
        NEXT
      </div>
    </section>
  );
};
