import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const RecipeContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  gap: 4rem;

  .recipes h2,
  .recipe-tags h2 {
    margin: 2rem 0;
  }
  .recipes h3 {
    margin: 2rem 0 1rem;
  }
  .recipe-img {
    width: 100%;
    margin: auto;
    display: block;
  }
  .tag-name {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    border: 1px solid var(--darkPurple);
    border-radius: 20px;
    padding: 0.6rem;
    margin: 0.2rem;
    transition: 0.2s;
  }
  .tag-name:hover {
    background: var(--darkPurple);
    color: var(--cream);
  }

  @media (min-width: 768px) {
    margin: 2rem 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;

    .recipe-tags {
      padding-left: 3rem;
      border-left: 1px dashed var(--mint);
    }
    .recipes,
    .recipe-tags {
      margin: 2rem 0 8rem;
    }
  }
`;

const SingleRecipe = ({ recipe, text }) => {
  const image = getImage(recipe.cover.asset.gatsbyImageData);
  const textTeaser = `${text.substring(0, 40)}... Read More`;

  return (
    <>
      <h3>{recipe.title}</h3>
      <p>{textTeaser}</p>
      <GatsbyImage className='recipe-img' image={image} alt={recipe.title} />
    </>
  );
};
const SingleRecipeTag = ({ tag }) => {
  return <li className='tag-name'>{tag}</li>;
};

const Recipes = ({ data }) => {
  // recipe info
  const recipes = data.posts.nodes.filter((recipe) => recipe.recipe === true);
  // all recipe tags for corresponding posts
  const tags = recipes
    .map((recipe) => recipe.tag)
    .map((tag) => tag.map((tag) => tag.tag))
    .flat(1)
    .map((tag) =>
      tag.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    );
  // remove duplicate tags
  const uniqueTags = [...new Set(tags)];

  return (
    <RecipeContainer>
      <div className='recipes'>
        <h2>Moonbelly Makes ~ Recipes</h2>
        {recipes.map((recipe) => (
          <SingleRecipe
            recipe={recipe}
            text={recipe.text[0].children[0].text}
            key={recipe.id}
          />
        ))}
      </div>
      <div className='recipe-tags'>
        <h2>Categories</h2>
        <ul>
          {uniqueTags.map((tag, index) => (
            <SingleRecipeTag tag={tag} key={index} />
          ))}
        </ul>
      </div>
    </RecipeContainer>
  );
};

export const query = graphql`
  query RecipesQuery {
    posts: allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        id
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
        tag {
          tag
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
