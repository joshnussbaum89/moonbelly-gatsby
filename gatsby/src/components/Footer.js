import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import styled from 'styled-components';

const FooterStyles = styled.div`
  margin: 8rem -1rem 0;
  padding: 1rem;
  position: relative;

  .footer-icon {
    padding: 0 1rem;
  }
  .waves {
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 540px;
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
        <svg className='waves' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 281l66.7 19.3c66.6 19.4 200 58 333.3 50.7 133.3-7.3 266.7-60.7 400-50.3 133.3 10.3 266.7 84.3 400 110.1 133.3 25.9 266.7 3.5 400-28.3s266.7-73.2 333.3-93.8L2000 268v273H0z'
            fill='#FAEAF7'
          />
          <path
            d='M0 353l66.7-2.3c66.6-2.4 200-7 333.3 10.1C533.3 378 666.7 417 800 417.7c133.3.6 266.7-37 400-38.4 133.3-1.3 266.7 33.7 400 34.4 133.3.6 266.7-33 333.3-49.9L2000 347v194H0z'
            fill='#b4abf5'
          />
        </svg>
      </FooterStyles>
    </footer>
  );
};

export default Footer;
