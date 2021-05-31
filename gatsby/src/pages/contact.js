import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  max-width: 800px;
  margin: 6rem auto;
  height: 80vh;
  text-align: center;

  .contact-form-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 90%;
    bottom: 2rem;
  }

  input[type='text'],
  textarea {
    width: 96%;
    border: 1px solid var(--purple);
    color: var(--darkPurple);
    padding: 0.5rem;
    margin: 0.6rem auto;
    border-radius: 2px;
  }
  input[type='submit'] {
    width: 40%;
    background: var(--purple);
    color: var(--darkPurple);
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    margin: 0.6rem auto;
    transition: 0.1s;
    cursor: pointer;
  }
  input[type='submit']:hover {
    transform: scale(1.02);
  }
  input[type='submit']:active {
    transform: scale(1);
  }
`;

const contact = () => {
  return (
    <ContactStyles>
      <h2>Get In Touch</h2>
      <form name='contact' action='POST' data-netlify='true'>
        <div className='contact-form-info'>
          <input type='text' placeholder='Name' name='name' />
          <input type='text' placeholder='Email' name='email' />
          <textarea
            name='message'
            placeholder='Your message...'
            cols='30'
            rows='10'
          ></textarea>
          <input type='submit' value='submit' />
        </div>
      </form>
    </ContactStyles>
  );
};

export default contact;
