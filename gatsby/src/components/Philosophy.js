import React from 'react';
import PhilosophyBlobSvgOne from './svgs/PhilosophyBlobSvgOne';
import PhilosophyBlobSvgTwo from './svgs/PhilosophyBlobSvgTwo';
import PhilosophyBlobSvgThree from './svgs/PhilosophyBlobSvgThree';
import PhilosophyBlobSvgFour from './svgs/PhilosophyBlobSvgFour';

const Philosophy = () => {
  return (
    <div className='philosophy'>
      <h2>Philosophy</h2>
      <div className='philosophy-container'>
        <PhilosophyBlobSvgThree />
        <div className='philosophy-container-desc'>
          <p className='philosophy-p-one'>
            I believe in decorating my life, connecting to nature as much as
            possible and feeding my body, eyes, and ears with magic. I think
            making is the meaning of life.
          </p>
          <PhilosophyBlobSvgOne />
        </div>
      </div>
      <div className='philosophy-container'>
        <div className='philosophy-container-desc'>
          <p className='philosophy-p-two'>
            Comfort and indulgence, our lived experience happens on many levels.
            Incorporate the elements, bring the outside IN (both the house and
            our bodies). Creating as an act of healing, output, expression, and
            energy exchange.
          </p>
          <PhilosophyBlobSvgTwo />
        </div>
        <PhilosophyBlobSvgFour />
      </div>
    </div>
  );
};

export default Philosophy;
