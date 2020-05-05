import React from "react";

export const GalleryButtons = ({ pageNum, setPageNum }) => {
  return (
    <section id='galleryButtons'>

      <div
        id='galleryButtonsPreview'
        className="PreviewButton"
        onClick={() => setPageNum(pageNum === 1 ? 4: pageNum - 1)}
        >
        PREVIEW
      </div>

      <span>|</span>

      <div
        id='galleryButtonsNext'
        className='NextButton'
        onClick={() => setPageNum(pageNum === 4 ? 1: pageNum + 1)}
        >
        NEXT
      </div>

    </section>
  );
};
