import React from 'react';
import styled from 'styled-components';

const PhilosophyBlobSvgFourStyles = styled.div`
  width: 350px;

  @media (max-width: 417px) {
    width: 300px;
  }
  
  @media (min-width: 800px) {
    display: block;
  }
`;

const PhilosophyBlobSvgFour = () => {
  return (
    <PhilosophyBlobSvgFourStyles>
      <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M319.548 121.27c20.3 35.2 22.3 75.2 15 115.3-7.4 40.2-24.1 80.5-56 99.9-31.9 19.4-78.9 17.9-119.6-.4-40.7-18.2-75.1-53.1-89.6-97.9-14.5-44.8-9.1-99.5 19.7-136.6 28.8-37 80.9-56.5 126.2-51.1 45.4 5.4 83.9 35.7 104.3 70.8'
          fill='#b6f3d1'
        />
      </svg>
    </PhilosophyBlobSvgFourStyles>
  );
};

export default PhilosophyBlobSvgFour;
