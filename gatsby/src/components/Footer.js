import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  padding: 4rem 0;
  border-top: 1px dashed var(--mint);
`;

const Footer = () => {
  return (
    <footer>
      <FooterStyles>
        <h2>Footer</h2>
        <p>"Footer" shows up on every page</p>
      </FooterStyles>
    </footer>
  );
};

export default Footer;
