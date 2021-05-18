import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import styled from 'styled-components';
import FooterWaveSvg from './FooterWaveSvg';

const FooterStyles = styled.div`
  margin: 8rem -1rem 0;
  padding: 1rem;
  position: relative;

  .waves {
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 540px;
  }
  .footer-icon {
    padding: 0 1rem;
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
          <ImPinterest2 className='footer-icon' />
          <AiOutlineYoutube className='footer-icon' />
          <AiOutlineInstagram className='footer-icon' />
        </div>
        <div>
          <p>♡ Made with care by Josh Nussbaum </p>
          <p>Copyright Moonbelly Makes {new Date().getFullYear()}</p>
        </div>
        <div>
          <p>back to top</p>
        </div>
        <FooterWaveSvg />
      </FooterStyles>
    </footer>
  );
};

export default Footer;
