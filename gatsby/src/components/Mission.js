import React from 'react';
import styled from 'styled-components';

// Components
import Philosophy from './Philosophy';
import About from './About';

const MissionStyles = styled.div`
  padding: 1rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(1fr, 500px));

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(450px, 1fr);
  }
`;

const Mission = () => {
  return (
    <MissionStyles>
      <Philosophy />
      <About />
    </MissionStyles>
  );
};

export default Mission;
