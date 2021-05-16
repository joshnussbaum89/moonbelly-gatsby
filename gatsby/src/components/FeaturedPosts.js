import React from 'react';
import styled from 'styled-components';
import featuredRecipe from '../assets/images/featured-recipe.jpg';
import featuredDiy from '../assets/images/featured-diy.jpg';

const FeaturedStyles = styled.div`
  .featured {
    display: flex;
    justify-content: space-between;
  }
  .featured-img {
    width: 49%;
  }
`;

// TODO
// 1. Style featured posts
// 2. Make sure the images are stacked on mobile - css grid?
const FeaturedPosts = () => {
  return (
    <>
      <FeaturedStyles>
        <div className='featured'>
          <img
            className='featured-img'
            src={featuredRecipe}
            placeholder='blurred'
          />
          <img className='featured-img' src={featuredDiy} />
        </div>
      </FeaturedStyles>
    </>
  );
};

export default FeaturedPosts;
