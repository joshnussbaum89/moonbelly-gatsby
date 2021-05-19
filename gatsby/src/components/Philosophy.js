import React from 'react';
import styled from 'styled-components';
import AboutBlobSvg from './svgs/AboutBlobSvgOne';
import AboutBlobSvgTwo from './svgs/AboutBlobSvgTwo';
import PhilosophyBlobSvgOne from './svgs/PhilosophyBlobSvgOne';
import PhilosophyBlobSvgTwo from './svgs/PhilosophyBlobSvgTwo';
import PhilosophyBlobSvgThree from './svgs/PhilosophyBlobSvgThree';
import PhilosophyBlobSvgFour from './svgs/PhilosophyBlobSvgFour';

const PhilosophyStyles = styled.div`
  padding: 1rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(1fr, 500px));

  .philosophy {
    display: flex;
  }
  .philosophy-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .philosophy-blob-purple,
  .about-blob-green,
  .about-blob-purple {
    width: 400px;
  }
  .philosophy-blob-green {
    width: 350px;
  }
  .about-katrina,
  .philosophy {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .philosophy-container-desc {
    position: relative;
  }
  .philosophy-container-desc p {
    position: absolute;
    text-align: center;
    width: 250px;
  }
  .philosophy-container-desc .philosophy-p-one {
    bottom: 145px;
    left: 60px;
    text-align: left;
  }
  .philosophy-container-desc .philosophy-p-two {
    bottom: 120px;
    left: 90px;
    text-align: right;
  }
  .about-katrina-desc {
    position: relative;
  }
  .about-katrina-desc p {
    position: absolute;
    width: 250px;
    bottom: 110px;
    left: 80px;
  }

  @media (max-width: 417px) {
    .philosophy-blob-purple,
    .about-blob-green,
    .about-blob-purple {
      width: 350px;
    }
    .philosophy-blob-green {
      width: 300px;
    }
    .philosophy-container-desc .philosophy-p-one {
      bottom: 125px;
      left: 50px;
    }
    .philosophy-container-desc .philosophy-p-two {
      bottom: 100px;
      left: 70px;
      text-align: right;
    }
    .about-katrina-desc p {
      bottom: 80px;
      left: 50px;
    }
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(450px, 1fr);

    .philosophy-blob-green {
      display: block;
    }
  }
  @media (min-width: 1131px) {
    .philosophy-container {
      display: flex;
      flex-direction: row;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 1130px) {
    .philosophy-container {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Philosophy = () => {
  return (
    <>
      <PhilosophyStyles>
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
                Comfort and indulgence, our lived experience happens on many
                levels. Incorporate the elements, bring the outside IN (both the
                house and our bodies). Creating as an act of healing, output,
                expression, and energy exchange.
              </p>
              <PhilosophyBlobSvgTwo />
            </div>
            <PhilosophyBlobSvgFour />
          </div>
        </div>
        <div className='about-katrina'>
          <h2>About Katrina</h2>
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
    </>
  );
};

export default Philosophy;
