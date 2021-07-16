import React from 'react';
import { graphql } from 'gatsby';

const NotFoundPage = () => {
  return (
    <>
      <h2>Uh oh, page not found</h2>
    </>
  );
};

export const query = graphql`
  query Posts {
    posts: allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        diy
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
  }
`;

export default NotFoundPage;
