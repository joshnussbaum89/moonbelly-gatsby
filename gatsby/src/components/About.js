import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import AboutBlobSvg from './svgs/AboutBlobSvgOne';
import AboutBlobSvgTwo from './svgs/AboutBlobSvgTwo';

const AboutStyles = styled.div`
  .about-katrina {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .headshot-container {
    position: relative;
    .katrina-headshot {
      position: absolute;
      border-radius: 50%;
      z-index: 100;
      top: 88px;
      left: 80px;
    }
  }

  .about-katrina-desc {
    position: relative;
    p {
      position: absolute;
      width: 250px;
      bottom: 110px;
      left: 80px;
    }
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
        {/* Katrina Headshot */}
        <div className='headshot-container'>
          <AboutBlobSvg />
          <StaticImage
            src='../assets/images/katrina-headshot.jpg'
            alt='Katrina in the woods'
            className='katrina-headshot'
            placeholder='blurred'
            width={220}
          />
        </div>
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
