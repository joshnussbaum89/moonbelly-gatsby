import React from 'react';
import styled from 'styled-components';
import MailchimpFormContainer from './MailchimpFormContainer';

const HeroStyles = styled.div`
  /* Main hero styles */
  .hero {
    position: relative;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero-logo {
    margin-bottom: 10rem;
  }
  .hero p {
    margin: 0;
    padding: 0;
    font-size: clamp(4rem, 6rem, 10vw);
    text-shadow: var(--headerShadow);
  }
  .hero p:first-child {
    font-family: Berkshire;
    font-weight: 600;
  }
  .hero .hero-moonbelly {
    text-transform: lowercase;
    margin-left: 2rem;
  }
  .hero .hero-makes {
    text-transform: uppercase;
    text-shadow: none;
    margin-top: -1rem;
    margin-right: 4.5rem;
  }
  .hero .hero-decorate {
    font-size: clamp(1.5rem, 2rem, 2.5vw);
    margin-top: -1rem;
    margin-left: 4rem;
    text-shadow: none;
  }

  @media (min-width: 900px) {
    .hero-logo {
      margin-bottom: 8rem;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <HeroStyles>
        <div className='hero'>
          <div className='hero-logo'>
            <p class='hero-moonbelly'>Moonbelly</p>
            <p class='hero-makes'>Makes</p>
            <p class='hero-decorate'>~ decorate your life ~</p>
          </div>
          <MailchimpFormContainer />
        </div>
      </HeroStyles>
    </>
  );
};

export default Hero;
