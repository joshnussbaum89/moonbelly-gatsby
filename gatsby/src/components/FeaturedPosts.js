import React from 'react';
import styled from 'styled-components';
import featuredRecipe from '../assets/images/featured-recipe.jpg';
import featuredDiy from '../assets/images/featured-diy.jpg';

const FeaturedStyles = styled.div`
  h2 {
    text-align: center;
    font-size: var(--large);
    font-weight: 100;
    margin: 1rem 0;
  }
  .featured {
    border-top: 1px dashed var(--mint);
    margin: 2rem 0;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  .featured-img {
    width: 100%;
  }
  @media (min-width: 768px) {
    .featured {
      display: flex;
      flex-direction: row;
    }
    .featured-img {
      width: 95%;
      margin: auto;
      display: block;
    }
  }
`;

const FeaturedPosts = () => {
  return (
    <>
      <FeaturedStyles>
        <div className='featured'>
          <div className='featured-img'>
            <h2>Recipes</h2>
            <img
              className='featured-img'
              src={featuredRecipe}
              placeholder='blurred'
              alt='Featured recipe'
            />
          </div>
          <div className='featured-img'>
            <h2>DIYs</h2>
            <img
              className='featured-img'
              src={featuredRecipe}
              placeholder='blurred'
              alt='Featured recipe'
            />
          </div>
        </div>
      </FeaturedStyles>
    </>
  );
};

export default FeaturedPosts;
