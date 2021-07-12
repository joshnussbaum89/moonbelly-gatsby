import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import styled from 'styled-components';

// Components
import LilyHome from './svgs/LilyHome';

const McFormStyles = styled.div`
  /* Validation styles */
  .mc-alert {
    text-align: center;
    display: block;
    margin: 0.5rem auto;
    width: 80vw;
    max-width: 400px;
    font-size: var(--medium);
    font-weight: 900;
    a:hover {
      color: var(--purple);
    }
  }
  .mc-alert--error {
    color: var(--pinkError);
  }
  .mc-alert--success {
    color: var(--mint);
  }

  /* Main Form */
  form {
    display: flex;
    flex-direction: column;
    width: 90vw;
    bottom: 2rem;
    input {
      font-size: var(--small);
      margin: 0.6rem;
      border-radius: 2px;
    }
    > input[type='text'],
    > input[type='email'] {
      border: 1px solid var(--purple);
      color: var(--darkPurple);
      padding: 0.5rem;
    }

    /* Submit button */
    .button-and-lily > input[type='submit'] {
      background: var(--purple);
      border: none;
      color: var(--darkPurple);
      padding: 0.5rem 1rem;
      transition: 0.1s;
      cursor: pointer;
    }
    .button-and-lily > input[type='submit']:hover {
      transform: scale(1.02);
    }
    .button-and-lily > input[type='submit']:active {
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
  }
`;

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const firstName = name.substring(0, name.indexOf(' '));
  const lastName = name.substring(name.indexOf(' '));

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setName('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      name &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: !firstName ? name : firstName,
        MERGE2: !firstName ? '' : lastName,
      });
  };

  return (
    <>
      {status === 'sending' && (
        <div className='mc-alert mc-alert--sending'>sending...</div>
      )}
      {status === 'error' && (
        <div
          className='mc-alert mc-alert--error'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className='mc-alert mc-alert--success'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Full Name'
          label='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email Address'
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className='button-and-lily'>
          <input type='submit' value='Submit' label='subscribe' />
          <LilyHome />
        </div>
      </form>
    </>
  );
};

const MailchimpFormContainer = (props) => {
  // TODO: .env.development file needs to be switched to .env.production
  const postUrl = `https://gmail.us4.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`;

  return (
    <McFormStyles>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </McFormStyles>
  );
};

export default MailchimpFormContainer;
