import React from "react";

export const Page = (props) => {
  return (
    <div id='page'>
      <div >
        <ul className='pageAnimation'>
          <li>{props.pageNum}</li>
        </ul>
        |
        <ul>
          <li>4</li>
        </ul>
      </div>
      </div>
  );
};