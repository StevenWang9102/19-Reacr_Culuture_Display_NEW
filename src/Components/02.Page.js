import React from "react";

export const Page = (props) => {
  return (
    <div id='page'>
        <ul className='pageAnimation'>
          <li>{props.pageNum}</li>
        </ul>
        |
        <ul>
          <li>4</li>
        </ul>
    </div>
  );
};
