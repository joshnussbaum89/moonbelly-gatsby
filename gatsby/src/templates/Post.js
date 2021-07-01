import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import styled from 'styled-components';

// components
import SingleTag from '../components/SingleTag';

const PostStyles = styled.div`
  max-width: 800px;
  margin: 2rem auto 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--medium);
  h2 {
    font-size: var(--variablePostTitle);
    text-shadow: var(--headerShadow);
    margin: 2rem 0;
    padding: 2rem;
  }
  h3 {
    font-size: var(--large);
  }
  .post-container {
    width: 100%;
    margin: 2rem 0;
  }
  .gatsby-image-wrapper {
    border-radius: 2px;
    margin: 1rem 0;
  }
  .custom-image {
    width: 100%;
  }
`;

const urlFor = (source) =>
  urlBuilder({ projectId: 'ubyb73h6', dataset: 'production' }).image(source);

const serializer = {
  types: {
    image: (props) => (
      <img
        className='custom-image'
        src={urlFor(props.node.asset)}
        alt='placeholder'
      />
    ),
  },
};

export default function SinglePostPage({ data: { posts } }) {
  const image = getImage(posts.cover.asset.gatsbyImageData);
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
      <div className='post-container'>
        <PortableText blocks={posts._rawText} serializers={serializer} />
      </div>
    </PostStyles>
  );
}

// This needs to be dynamic base on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query ($slug: String!) {
    posts: sanityPost(slug: { current: { eq: $slug } }) {
      title
      id
      _rawText
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
