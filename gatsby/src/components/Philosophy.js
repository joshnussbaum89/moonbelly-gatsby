import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import PhilosophyBlobSvgOne from './svgs/PhilosophyBlobSvgOne';
import PhilosophyBlobSvgTwo from './svgs/PhilosophyBlobSvgTwo';
import PhilosophyBlobSvgThree from './svgs/PhilosophyBlobSvgThree';
import PhilosophyBlobSvgFour from './svgs/PhilosophyBlobSvgFour';

const PhilosophyStyles = styled.div`
  .philosophy,
  .philosophy-container {
    display: flex;
  }

  .philosophy-container {
    position: relative;
    .veggies-image,
    .fabric-image {
      position: absolute;
      border-radius: 50%;
      z-index: 100;
    }
    .veggies-image {
      top: 80px;
    }
    .fabric-image {
      bottom: 85px;
    }
  }

  .philosophy-container,
  .philosophy {
    flex-direction: column;
    align-items: center;
  }

  .philosophy,
  .philosophy-container-desc p {
    text-align: center;
  }

  .philosophy-container-desc {
    position: relative;
  }

  .philosophy-container-desc p {
    position: absolute;
  }

  .philosophy-container-desc p {
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

  @media (max-width: 417px) {
    .philosophy-container-desc .philosophy-p-one {
      bottom: 125px;
      left: 50px;
    }

    .philosophy-container-desc .philosophy-p-two {
      bottom: 100px;
      left: 70px;
      text-align: right;
    }
  }

  @media (min-width: 1131px) {
    .philosophy-container {
      display: flex;
      flex-direction: row;
      .veggies-image {
        top: 105px;
        left: 85px;
      }
      .fabric-image {
        left: 478px;
        bottom: 110px;
      }
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
    <PhilosophyStyles>
      <div className='philosophy'>
        <h2>Philosophy</h2>
        <div className='philosophy-container'>
          {/* green blob top-left */}
          <PhilosophyBlobSvgThree />
          {/* recipe image */}
          <StaticImage
            src='../assets/images/veggies.jpg'
            alt='Vegetables'
            className='veggies-image'
            placeholder='blurred'
            width={180}
          />
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
          {/* green blob bottom-middle */}
          <PhilosophyBlobSvgFour />
          {/* fabric image */}
          <StaticImage
            src='../assets/images/fabric.jpg'
            alt='Fabric'
            className='fabric-image'
            placeholder='blurred'
            width={195}
          />
        </div>
      </div>
    </PhilosophyStyles>
  );
};

export default Philosophy;
