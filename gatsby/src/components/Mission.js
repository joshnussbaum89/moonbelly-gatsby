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

  .philosophy,
  .philosophy-container,
  .about-katrina {
    display: flex;
  }
  .philosophy-container,
  .about-katrina,
  .philosophy {
    flex-direction: column;
    align-items: center;
  }
  .philosophy-blob-purple,
  .about-blob-green,
  .about-blob-purple {
    width: 400px;
  }
  .philosophy-blob-green {
    width: 350px;
  }
  .about-katrina,
  .philosophy,
  .philosophy-container-desc p {
    text-align: center;
  }
  .philosophy-container-desc,
  .about-katrina-desc {
    position: relative;
  }
  .philosophy-container-desc p,
  .about-katrina-desc p {
    position: absolute;
  }
  .philosophy-container-desc p,
  .about-katrina-desc p {
    width: 250px;
  }
  .philosophy-container-desc .philosophy-p-one {
    bottom: 145px;
    left: 60px;
    text-align: left;
  }
  .philosophy-container-desc .philosophy-p-two {
    bottom: 120px;
    left: 90px;
    text-align: right;
  }
  .about-katrina-desc p {
    bottom: 110px;
    left: 80px;
  }

  @media (max-width: 417px) {
    .philosophy-blob-purple,
    .about-blob-green,
    .about-blob-purple {
      width: 350px;
    }
    .philosophy-blob-green {
      width: 300px;
    }
    .philosophy-container-desc .philosophy-p-one {
      bottom: 125px;
      left: 50px;
    }
    .philosophy-container-desc .philosophy-p-two {
      bottom: 100px;
      left: 70px;
      text-align: right;
    }
    .about-katrina-desc p {
      bottom: 80px;
      left: 50px;
    }
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(450px, 1fr);

    .philosophy-blob-green {
      display: block;
    }
  }
  @media (min-width: 1131px) {
    .philosophy-container {
      display: flex;
      flex-direction: row;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 1130px) {
    .philosophy-container {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Mission = () => {
  return (
    <>
      <MissionStyles>
        <Philosophy />
        <About />
      </MissionStyles>
    </>
  );
};

export default Mission;
