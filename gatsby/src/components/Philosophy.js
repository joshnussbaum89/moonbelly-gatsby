import React from 'react';
import styled from 'styled-components';
import AboutBlobSvg from './AboutBlobSvg';
import AboutBlobSvgTwo from './AboutBlobSvgTwo';

const PhilosophyStyles = styled.div`
  /* border: 1px solid red; */
  margin: 5rem 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;

  .about-katrina {
    /* border: 1px solid red; */
    height: 100vh;
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .about-katrina-desc {
    position: relative;
  }
  .about-katrina-desc p {
    position: absolute;
    bottom: 70px;
    left: 0;
  }

  @media (min-width: 768px) {
    margin: 4rem 1rem;
    grid-template-columns: 2fr minmax(400px, 1fr);
    grid-template-rows: 1fr;
    .about-katrina p,
    .about-katrina h2 {
      margin: 2rem 1rem;
    }
  }
`;

const Philosophy = () => {
  return (
    <div>
      <PhilosophyStyles>
        <div className='philosophy'>
          <h2>philosophy</h2>
        </div>
        <div className='about-katrina'>
          <h2>about katrina</h2>
          <AboutBlobSvg />
          <div className='about-katrina-desc'>
            <AboutBlobSvgTwo />
            <p>
              Katrina is a Libra sun, Pisces moon who delights in all things
              that grow and move. In addition to cooking and making, she loves
              dancing, candles, hiking, and is learning how to identify birds by
              their calls. She lives in Wisconsin with her partner Josh and
              their two cats Jack and Pete.
            </p>
          </div>
        </div>
      </PhilosophyStyles>
    </div>
  );
};

export default Philosophy;
