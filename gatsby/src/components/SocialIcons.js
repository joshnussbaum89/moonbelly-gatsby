import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Material Icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';

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
      <Link to='https://facebook.com' target='_blank' rel='noreferrer'>
        <ImPinterest2 size='1.5rem' />
      </Link>
      <Link to='https://facebook.com' target='_blank' rel='noreferrer'>
        <AiOutlineYoutube size='1.5rem' />
      </Link>
      <Link to='https://facebook.com' target='_blank' rel='noreferrer'>
        <AiOutlineInstagram size='1.5rem' />
      </Link>
    </SocialIconsStyles>
  );
};

export default SocialIcons;
