import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import styled from 'styled-components';

const SocialIconsStyles = styled.div`
  svg {
    padding-right: 2rem;
  }

  a:hover {
    color: var(--purple);
  }
`;

const SocialIcons = () => {
  return (
    <SocialIconsStyles className='social-icons'>
      <a href='https://facebook.com' target='_blank' rel='noreferrer'>
        <ImPinterest2 size='1.5rem' />
      </a>
      <a href='https://facebook.com' target='_blank' rel='noreferrer'>
        <AiOutlineYoutube size='1.5rem' />
      </a>
      <a href='https://facebook.com' target='_blank' rel='noreferrer'>
        <AiOutlineInstagram size='1.5rem' />
      </a>
    </SocialIconsStyles>
  );
};

export default SocialIcons;
