import React from 'react';
import styled from 'styled-components';
// Component
import Nav from './Nav';

const HeroStyles = styled.div`
  .hero {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero p {
    margin: 0;
    font-size: var(--extraLarge);
    text-shadow: 1px 1px 0 black;
  }
  .hero p:first-child {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Hero = () => {
  return (
    <>
      <Nav />
      <HeroStyles>
        <div className='hero'>
          <p>Moonbelly</p>
          <p>Makes</p>
        </div>
      </HeroStyles>
    </>
  );
};

export default Hero;
