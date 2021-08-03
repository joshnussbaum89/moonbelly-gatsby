import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Material Icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';

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

  @media (min-width: 900px) {
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
        {/* TODO: */}
        {/* Add valid urls for social icons */}
        <div>
          <Link to='/'>
            <ImPinterest2 size='1.5rem' className='footer-icon' />
          </Link>
          <Link to='/'>
            <AiOutlineYoutube size='1.5rem' className='footer-icon' />
          </Link>
          <Link to='/'>
            <AiOutlineInstagram size='1.5rem' className='footer-icon' />
          </Link>
        </div>
        <div>
          <p>
            ♡ Made with care by{' '}
            <Link
              to='https://joshnussbaum.io/'
              target='_blank'
              rel='noreferrer'
            >
              Josh Nussbaum
            </Link>
          </p>
          <p>Copyright Moonbelly Makes {new Date().getFullYear()}</p>
        </div>
        <div>
          <p>
            <Link to='/'>back to top</Link>
          </p>
        </div>
        <FooterWaveSvg />
      </FooterStyles>
    </footer>
  );
};

export default Footer;
