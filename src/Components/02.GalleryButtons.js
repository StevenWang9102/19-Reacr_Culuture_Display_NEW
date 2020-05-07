import React from "react";

export const GalleryButtons = ({ image, pageNum, setPageNum, setImageSrc1, setImageSrc2 }) => {
  return (
    <section id='galleryButtons'>
      <div
        id='galleryButtonsPreview'
        className='PreviewButton'
        onClick={() => {
          const temp = pageNum
          setPageNum(temp === 1 ? 4 : temp - 1);
          setTimeout(() => setImageSrc1(image[temp === 1? 3: temp-2]), 800);
          setTimeout(() => setImageSrc2(image[temp === 1? 3: temp-2]), 0);
        }}>
        PREVIEW
      </div>

      <span>|</span>

      <div
        id='galleryButtonsNext'
        className='NextButton'
        onClick={() => {
          setPageNum(pageNum === 4 ? 1 : pageNum + 1);
          setTimeout(() => setImageSrc1(image[pageNum === 4? 0: pageNum]), 800);
          setTimeout(() => setImageSrc2(image[pageNum === 4? 0: pageNum]), 0);
        }}>
        NEXT
      </div>
    </section>
  );
};
