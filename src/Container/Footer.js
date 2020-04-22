import React from "react";

export const Footer = props => {
  return (
    <footer id='footer'>
      <hr/>
        <div className='container'>
          <div className='row'>
            <p className='col-sm-12 col-lg-6'><b>© 2020 Uber Technologies Inc.</b></p>
            <p className='col-sm-12 col-lg-2'>Privacy</p>
            <p className='col-sm-12 col-lg-2'>Accessibility</p>
            <p className='col-sm-12 col-lg-2'>Terms</p>
          </div>
        </div>
    </footer>
  );
};
