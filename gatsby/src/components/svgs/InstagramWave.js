import React from 'react';
import styled from 'styled-components';

const IGContainerStyles = styled.svg`
  width: 100%;
  margin-bottom: 10rem;
`;

const InstagramWave = () => {
  return (
    <IGContainerStyles
      className='instagram-wave'
      width='5000'
      height='540'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 291l59.5 3.8C119 298.7 238 306.3 357 309c119 2.7 238 .3 357-13.5s238-39.2 357.2-48.8c119.1-9.7 238.5-3.7 357.6 5.6 119.2 9.4 238.2 22 357.2 17.9 119-4.2 238-25.2 357-21.7s238 31.5 357 46.3c119 14.9 238 16.5 357 10.5s238-19.6 357-35.5c119-15.8 238-33.8 357.2-29 119.1 4.9 238.5 32.5 357.6 44.9C4048 298 4167 295 4286 283.2c119-11.9 238-32.5 357-40s238-1.9 297.5 1l59.5 2.8'
        fill='none'
        stroke-linecap='round'
        stroke='#b6f3d1'
        stroke-width='400'
      />
    </IGContainerStyles>
  );
};

export default InstagramWave;
