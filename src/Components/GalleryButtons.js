import React from "react";

export const GalleryButtons = ({ pageNum, setPageNum }) => {
  return (
    <div id='galleryButtons' className='preview-next'>
      <div
        id='galleryButtonsPreview'
        className="PreviewButton"
        onClick={() => {
          setTimeout(function () {
            if (pageNum === 1) {
              setPageNum(4);
            } else {
              setPageNum(pageNum - 1);
            }
          }, 600);
        }}>
        PREVIEW
      </div>

      <span>|</span>

      <div
        id='galleryButtonsNext'
        className='NextButton'
        onClick={() => {
          if (pageNum === 4) {
            setPageNum(1);
          } else {
            setPageNum(pageNum + 1);
          }
        }}>
        NEXT
      </div>

      {/* <span id='floatBall'/> */}
    </div>
  );
};
