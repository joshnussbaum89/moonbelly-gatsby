import React from 'react';
import AboutBlobSvg from './svgs/AboutBlobSvgOne';
import AboutBlobSvgTwo from './svgs/AboutBlobSvgTwo';

const About = () => {
  return (
    <div className='about-katrina'>
      <h2>About Katrina</h2>
      <AboutBlobSvg />
      <div className='about-katrina-desc'>
        <AboutBlobSvgTwo />
        <p>
          Katrina is a Libra sun, Pisces moon who delights in all things that
          grow and move. In addition to cooking and making, she loves dancing,
          candles, hiking, and is learning how to identify birds by their calls.
          She lives in Wisconsin with her partner Josh and their two cats Jack
          and Pete.
        </p>
      </div>
    </div>
  );
};

export default About;
