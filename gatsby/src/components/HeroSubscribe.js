import React from 'react';
import styled from 'styled-components';

// Components
import LilyHome from './svgs/LilyHome';

const HeroSubscribeStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 80%;
  bottom: 2rem;

  input {
    font-size: var(--small);
    margin: 0.6rem;
    border-radius: 2px;
  }
  > input[type='name'],
  > input[type='email'] {
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const HeroSubscribe = () => {
  return (
    <HeroSubscribeStyles>
      <input type='name' placeholder='Your Name' />
      <input type='email' placeholder='Email Address' />
      <div className='button-and-lily'>
        <input type='button' value='Submit' />
        <LilyHome />
      </div>
    </HeroSubscribeStyles>
  );
};

export default HeroSubscribe;
