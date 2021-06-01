import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// components
import SingleTag from '../components/SingleTag';

const PostStyles = styled.div`
  max-width: 800px;
  margin: 2rem auto 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: var(--variablePostTitle);
    text-shadow: var(--headerShadow);
    margin: 2rem 0;
    padding: 2rem;
  }
  p {
    font-size: var(--medium);
    padding: 2rem 0;
    margin: 2rem 0;
  }
  .gatsby-image-wrapper {
    border-radius: 2px;
    margin: 1rem 0;
  }
`;

export default function SinglePostPage({ data: { posts } }) {
  const image = getImage(posts.cover.asset.gatsbyImageData);
  const postText = posts.text[0].children[0].text;
  const tags = posts.tag.map((tag) => tag.tag);

  return (
    <PostStyles>
      <h2>{posts.title}</h2>
      <GatsbyImage image={image} alt={posts.title} />
      <ul>
        {tags.map((tag) => (
          <SingleTag tag={tag} />
        ))}
      </ul>
      <p>{postText}</p>
    </PostStyles>
  );
}

// This needs to be dynamic base on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query ($slug: String!) {
    posts: sanityPost(slug: { current: { eq: $slug } }) {
      title
      id
      cover {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            width: 2500
          )
        }
      }
      text {
        children {
          text
        }
      }
      tag {
        tag
      }
    }
    sanityTag {
      diy
      id
      recipes
    }
  }
`;
