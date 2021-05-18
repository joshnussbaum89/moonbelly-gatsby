import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import styled from 'styled-components';

const FooterStyles = styled.div`
  background: var(--peach);
  margin: 0 -1rem;
  padding: 1rem;
  border-top: 1px solid var(--mint);

  .footer-icon {
    padding: 0 1rem;
  }
  @media (min-width: 768px) {
    margin: 0;
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
      </FooterStyles>
    </footer>
  );
};

export default Footer;
