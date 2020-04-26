/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { WhatWeDoLeft } from "../Components/03.WhatWeDoLeft";
import { WhatWeDoRight } from "../Components/03.WhatWeDoRight";


export const WhatWeDo = (props) => {

  const [pageNum, setPageNum] = useState(1);

  return (
    <section id='what-we-do'>
      <div className='container'>
        <div className='row'>

          <div className='first-column col-sm-12 col-md-7 col-lg-8'>
            <WhatWeDoLeft 
              pageNum = {pageNum}
              setPageNum = {(num)=>setPageNum(num)} />
          </div>

          <div className='second-column col-sm-12 col-md-5 col-lg-4'>
            <WhatWeDoRight
              pageNum = {pageNum}
            />
          </div>
          </div>
      </div>
      <div id='followImg' alt=''></div>
    </section>
  );
};
