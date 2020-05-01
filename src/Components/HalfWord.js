import React from "react";
import arrow from "../img/03.whatwedo/arrow.svg";
console.log(arrow);

export const HalfWord = (props) => {
  return (
    <section id='titleContainer'>
      <div id='titlewrapper' name = "titlewrapper">
        <h1>{props.title}</h1>
        <h1>
          <p>{props.title}</p>
          {/* <img src={arrow} alt=''/> */}
        </h1> 
      </div>
 </section>
  );
};
