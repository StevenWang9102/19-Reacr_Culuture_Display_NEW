/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { WhatWeDoP1 } from "../Components/03.WhatWeDoP1";
import { WhatWeDoP2 } from "../Components/03.WhatWeDoP2";


export const WhatWeDo = (props) => {

  const [pageNum, setPageNum] = useState(1);

  return (
    <section id='what-we-do'>
      <div className='container'>
        <div className='row'>

          <div className='first-column col-sm-12 col-md-7 col-lg-8'>
            <WhatWeDoP1 
              pageNum = {pageNum}
              setPageNum = {(num)=>setPageNum(num)} />
          </div>

          <div className='second-column col-sm-12 col-md-5 col-lg-4'>
            <WhatWeDoP2
              pageNum = {pageNum}
            />
          </div>
          </div>
      </div>
    </section>
  );
};
