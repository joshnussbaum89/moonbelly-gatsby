import React from 'react';
import styled from 'styled-components';

const PhilosophyBlobSvgTwoStyles = styled.div`
  width: 400px;

  @media (max-width: 417px) {
    width: 350px;
  }
`;

const PhilosophyBlobSvgTwo = () => {
  return (
    <PhilosophyBlobSvgTwoStyles>
      <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M364.52 116.342c26.6 22.4 14.7 86.6-12.2 124.3s-68.9 48.9-100.1 52.2c-31.2 3.3-51.5-1.3-97.6-3.8-46.1-2.5-118-2.8-131.6-26.6-13.6-23.8 31.1-71.2 71.6-96.8 40.5-25.5 76.7-29.3 127.4-40.9 50.7-11.5 115.8-30.8 142.5-8.4'
          fill='#b4abf536'
        />
      </svg>
    </PhilosophyBlobSvgTwoStyles>
  );
};

export default PhilosophyBlobSvgTwo;
