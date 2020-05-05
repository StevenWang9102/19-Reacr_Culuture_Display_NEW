import React from "react";

export const HalfWord = (props) => {
  return (
    <section id='titleContainer'>
      <div id='titlewrapper'>
        <h1>{props.title}</h1>
        <h1>
          <p>{props.title}</p>
        </h1> 
      </div>
 </section>
  );
};
