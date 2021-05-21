import React from 'react';
import styled from 'styled-components';

// Components
import AboutBlobSvg from './svgs/AboutBlobSvgOne';
import AboutBlobSvgTwo from './svgs/AboutBlobSvgTwo';

const AboutStyles = styled.div`
  .about-katrina {
    display: flex;
  }

  .about-katrina {
    flex-direction: column;
    align-items: center;
  }
  .about-katrina {
    text-align: center;
  }

  .about-katrina-desc {
    position: relative;
  }

  .about-katrina-desc p {
    position: absolute;
  }

  .about-katrina-desc p {
    width: 250px;
  }

  .about-katrina-desc p {
    bottom: 110px;
    left: 80px;
  }

  @media (max-width: 417px) {
    .about-katrina-desc p {
      bottom: 80px;
      left: 50px;
    }
  }
`;

const About = () => {
  return (
    <AboutStyles>
      <div className='about-katrina'>
        <h2>About Katrina</h2>
        <AboutBlobSvg />
        <div className='about-katrina-desc'>
          <AboutBlobSvgTwo />
          <p>
            Katrina is a Libra sun, Pisces moon who delights in all things that
            grow and move. In addition to cooking and making, she loves dancing,
            candles, hiking, and is learning how to identify birds by their
            calls. She lives in Wisconsin with her partner Josh and their two
            cats Jack and Pete.
          </p>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
