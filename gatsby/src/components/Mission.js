import React from 'react';
import styled from 'styled-components';

// Components
import Philosophy from './Philosophy';
import About from './About';

const MissionStyles = styled.div`
  display: grid;
  padding: 1rem 0 4rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(1fr, 500px));

  @media (min-width: 900px) {
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
