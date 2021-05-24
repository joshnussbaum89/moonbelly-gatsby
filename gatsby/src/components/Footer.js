import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import styled from 'styled-components';

// Components
import FooterWaveSvg from './svgs/FooterWaveSvg';

const FooterStyles = styled.div`
  margin: 8rem -1rem 0;
  padding: 1rem;
  position: relative;

  a:hover {
    opacity: 0.8;
  }

  .waves {
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .footer-icon {
    padding: 0 1rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin: 8rem 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <footer>
      <FooterStyles>
        <div>
          <a href='#'>
            <ImPinterest2 size='1.5rem' className='footer-icon' />
          </a>
          <a href='#'>
            <AiOutlineYoutube size='1.5rem' className='footer-icon' />
          </a>
          <a href='#'>
            <AiOutlineInstagram size='1.5rem' className='footer-icon' />
          </a>
        </div>
        <div>
          <p>
            ♡ Made with care by{' '}
            <a href='https://joshnussbaum.io/' target='_blank' rel='noreferrer'>
              Josh Nussbaum{' '}
            </a>
          </p>
          <p>Copyright Moonbelly Makes {new Date().getFullYear()}</p>
        </div>
        <div>
          <p>
            <a href='#top'>back to top</a>
          </p>
        </div>
        <FooterWaveSvg />
      </FooterStyles>
    </footer>
  );
};

export default Footer;
