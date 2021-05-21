import React from 'react';
import { graphql } from 'gatsby';

// Components
import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Instagram from '../components/Instagram';

const HomePage = ({ data }) => {
  const posts = data.posts.nodes;
  const mostRecentRecipe = posts.filter((post) => post.recipe === true)[0];
  const mostRecentDiy = posts.filter((post) => post.diy === true)[0];
  return (
    <>
      <Hero id='top' />
      <FeaturedPosts
        posts={posts}
        mostRecentRecipe={mostRecentRecipe}
        mostRecentDiy={mostRecentDiy}
      />
      <Mission />
      <Instagram />
    </>
  );
};

export const query = graphql`
  query PostsQuery {
    posts: allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        diy
        recipe
        title
        slug {
          current
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
  }
`;

export default HomePage;
