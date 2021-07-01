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
  .read-more {
    background-color: var(--pink);
    border-radius: 2px;
    transition: 0.2s;
    padding: 0.1rem;
  }
  .read-more:hover {
    background-color: var(--mint);
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
  // const recipeTextTeaser = `${mostRecentRecipe.text[0].children[0].text.substring(
  //   0,
  //   30
  // )}`;
  // const diyTextTeaser = `${mostRecentDiy.text[0].children[0].text.substring(
  //   0,
  //   30
  // )}`;

  return (
    <>
      <FeaturedStyles>
        <div className='featured'>
          <div>
            <h2>{mostRecentRecipe.title}</h2>
            <p>
              {/* {recipeTextTeaser} */}
              <Link to={`/post/${mostRecentRecipe.slug.current}`}>
                ... <strong className='read-more'>Read More</strong>
              </Link>
            </p>
            <Link to={`post/${mostRecentRecipe.slug.current}`}>
              <GatsbyImage
                className='featured-img'
                image={recipeImage}
                alt={mostRecentRecipe.title}
              />
            </Link>
          </div>
          <div>
            <h2>{mostRecentDiy.title}</h2>
            <p>
              {/* {diyTextTeaser} */}
              <Link to={`/post/${mostRecentDiy.slug.current}`}>
                ... <strong className='read-more'>Read More</strong>
              </Link>
            </p>
            <Link to={`post/${mostRecentDiy.slug.current}`}>
              <GatsbyImage
                className='featured-img'
                image={diyImage}
                alt={mostRecentDiy}
              />
            </Link>
          </div>
        </div>
      </FeaturedStyles>
    </>
  );
};

export default FeaturedPosts;
