import React from "react";
import minus from "../img/02.gallery/minus.svg";

export const ViewProjectButton = () => {
  return (
    <div id='view-project'>
      VIEW PROJECT
      <div className='view-project-hover'> </div>
      <img src={minus} alt="-"/>
    </div>
  );
};
