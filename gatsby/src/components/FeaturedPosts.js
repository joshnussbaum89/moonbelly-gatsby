import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const FeaturedStyles = styled.div`
  h2 {
    margin: 1rem 0;
  }
  .featured {
    border-top: 1px dashed var(--mint);
    margin: 2rem 0;
    padding: 5rem 0 3rem;
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
      width: 100%;
      margin: auto;
      display: block;
    }
  }
`;

const FeaturedPosts = ({ mostRecentRecipe, mostRecentDiy }) => {
  const recipeImage = getImage(mostRecentRecipe.cover.asset.gatsbyImageData);
  const diyImage = getImage(mostRecentDiy.cover.asset.gatsbyImageData);

  return (
    <>
      <FeaturedStyles>
        <div className='featured'>
          <div>
            <h2>{mostRecentRecipe.title}</h2>
            <p>
              Here is a description...{' '}
              <Link to={`recipes/${mostRecentRecipe.slug.current}`}>
                Read More
              </Link>
            </p>
            <Link to={`recipes/${mostRecentRecipe.slug.current}`}>
              <GatsbyImage className='featured-img' image={recipeImage} />
            </Link>
          </div>
          <div>
            <h2>{mostRecentDiy.title}</h2>
            <p>
              Here is a description...{' '}
              <Link to={`diy/${mostRecentDiy.slug.current}`}>Read More</Link>
            </p>
            <Link to={`diy/${mostRecentDiy.slug.current}`}>
              <GatsbyImage className='featured-img' image={diyImage} />
            </Link>
          </div>
        </div>
      </FeaturedStyles>
    </>
  );
};

export default FeaturedPosts;
