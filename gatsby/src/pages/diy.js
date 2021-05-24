import React from 'react';
import DiyItems from '../components/DiyItems';
import DiyTags from '../components/DiyTags';
import styled from 'styled-components';

const DiyContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 2rem 0;

  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
  }
`;

const diy = () => {
  return (
    <>
      <h2>DIYs</h2>
      <DiyContainer>
        <DiyItems />
        <DiyTags />
      </DiyContainer>
    </>
  );
};

export default diy;
