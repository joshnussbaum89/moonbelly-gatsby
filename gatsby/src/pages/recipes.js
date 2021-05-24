// TODO: Add Text to each image

import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const RecipeContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 4rem;

  .recipes,
  .diys {
    margin: 2rem 0 4rem;
  }
  .recipes h2,
  .diys h2 {
    margin: 2rem 0;
  }
  .recipes h3,
  .diys h3 {
    margin: 1rem 0;
  }
  .recipe-img {
    width: 100%;
    margin: auto;
    display: block;
  }

  @media (min-width: 768px) {
    margin: 2rem 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
  }
`;

const SingleRecipe = ({ recipe }) => {
  const image = getImage(recipe.cover.asset.gatsbyImageData);
  console.log(recipe);
  return (
    <>
      <h3>{recipe.title}</h3>
      <GatsbyImage className='recipe-img' image={image} />
    </>
  );
};
const SingleTag = ({ tags, diy, recipes }) => {
  return <h3>{tags}</h3>;
};

const Recipes = ({ data }) => {
  const recipes = data.posts.nodes.filter((recipe) => recipe.recipe === true);
  const tagInfo = data.allSanityTag.nodes;

  return (
    <RecipeContainer>
      <div className='recipes'>
        <h2>Recipes</h2>
        {recipes.map((recipe) => (
          <SingleRecipe recipe={recipe} />
        ))}
      </div>
      <div className='diys'>
        <h2>Recipe Tags</h2>
        {tagInfo.map((tagInfo) => (
          <SingleTag
            tags={tagInfo.tag}
            diy={tagInfo.diy}
            recipes={tagInfo.recipes}
          />
        ))}
      </div>
    </RecipeContainer>
  );
};

export const query = graphql`
  query RecipesQuery {
    posts: allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        recipe
        title
        slug {
          current
        }
        text {
          children {
            text
          }
        }
        cover {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 2500
            )
          }
        }
      }
    }
    allSanityTag {
      nodes {
        diy
        tag
        recipes
      }
    }
  }
`;

export default Recipes;
