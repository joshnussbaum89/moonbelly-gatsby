import React from 'react';
import styled from 'styled-components';
import LilyHome from './svgs/LilyHome';

const HeroStyles = styled.div`
  /* Main hero styles */
  .hero {
    position: relative;
    height: 90vh;
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
    text-shadow: 1px 1px 0 black;
  }
  .hero p:first-child {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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

  /* Subscription input field */
  .hero-subscribe {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 80%;
    bottom: 2rem;
  }
  .hero-subscribe input {
    font-size: var(--small);
    margin: 0.6rem;
    border-radius: 2px;
  }
  .hero-subscribe > input[type='name'],
  .hero-subscribe > input[type='email'] {
    border: 1px solid var(--purple);
    color: var(--darkPurple);
    padding: 0.5rem;
  }
  /* Submit button */
  .button-and-lily > input[type='button'] {
    background: var(--purple);
    border: none;
    color: var(--darkPurple);
    padding: 0.5rem 1rem;
    transition: 0.1s;
    cursor: pointer;
  }
  .button-and-lily > input[type='button']:hover {
    transform: scale(1.02);
  }
  .button-and-lily > input[type='button']:active {
    transform: scale(1);
  }
  .button-and-lily {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .lily-home {
    position: absolute;
    z-index: -1;
    opacity: 0.6;
    width: 350px;
    bottom: -58px;
    left: -103px;
  }

  @media (min-width: 768px) {
    .hero-logo {
      margin-bottom: 8rem;
    }
    .hero-subscribe {
      display: flex;
      flex-direction: row;
      justify-content: center;
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
          <div className='hero-subscribe'>
            <input type='name' placeholder='Your Name' />
            <input type='email' placeholder='Email Address' />
            <div className='button-and-lily'>
              <input type='button' value='Submit' />
              <LilyHome />
            </div>
          </div>
        </div>
      </HeroStyles>
    </>
  );
};

export default Hero;
