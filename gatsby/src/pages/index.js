import React from 'react';
import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';

const HomePage = ({ data }) => {
  const posts = data.posts.nodes;
  const mostRecentRecipe = posts.filter((post) => post.recipe === true)[0];
  const mostRecentDiy = posts.filter((post) => post.diy === true)[0];
  return (
    <div>
      <Hero />
      <FeaturedPosts
        posts={posts}
        mostRecentRecipe={mostRecentRecipe}
        mostRecentDiy={mostRecentDiy}
      />
    </div>
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
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export default HomePage;
