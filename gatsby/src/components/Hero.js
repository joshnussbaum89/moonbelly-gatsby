import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.div`
  /* Main hero styles */
  height: 95vh;

  .hero {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero p {
    margin: 0;
    padding: 0;
    font-size: clamp(4rem, 6rem, 10vw);
    text-shadow: 1px 1px 0 black;
  }
  .hero p:first-child {
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Subscription input field */
  .hero-subscribe {
    display: flex;
  }
  .hero-subscribe > input {
    margin: 0.6rem;
    border-radius: 2px;
  }
  .hero-subscribe > input[type='button'] {
    background: var(--pink);
    cursor: pointer;
  }
  .hero-subscribe > input[type='button']:active {
    transform: translate(1px, 1px);
  }
  .hero-subscribe > input[type='email'],
  .hero-subscribe > input[type='button'] {
    border: 1px solid var(--darkPurple);
    font-size: var(--medium);
    color: var(--darkPurple);
    padding: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroStyles>
        <div className='hero'>
          <p>Moonbelly</p>
          <p>Makes</p>
          <div className='hero-subscribe'>
            <input type='email' placeholder='moonbelly@email.com' />
            <input type='button' value='subscribe' />
          </div>
        </div>
      </HeroStyles>
    </>
  );
};

export default Hero;
