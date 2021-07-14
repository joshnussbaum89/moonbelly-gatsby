import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const ContactStyles = styled.div`
  max-width: 800px;
  margin: 6rem auto;
  height: 80vh;
  text-align: center;

  .contact-form-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 90%;
    bottom: 2rem;
  }

  input[type='text'],
  textarea {
    width: 96%;
    border: 1px solid var(--purple);
    color: var(--darkPurple);
    padding: 0.5rem;
    margin: 0.6rem auto;
    border-radius: 2px;
  }
  input[type='submit'] {
    width: 40%;
    background: var(--purple);
    color: var(--darkPurple);
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    margin: 0.6rem auto;
    transition: 0.1s;
    cursor: pointer;
  }
  input[type='submit']:hover {
    transform: scale(1.02);
  }
  input[type='submit']:active {
    transform: scale(1);
  }
`;

const Contact = () => {
  return (
    <ContactStyles>
      <h2>Get In Touch</h2>
      <form name='contact' action='POST' data-netlify='true'>
        <div className='contact-form-info'>
          <input type='text' placeholder='Full Name' name='name' />
          <input type='text' placeholder='Email Address' name='email' />
          <textarea
            name='message'
            placeholder='Your Message'
            cols='30'
            rows='10'
          ></textarea>
          <input type='submit' value='submit' />
        </div>
      </form>
    </ContactStyles>
  );
};

export const query = graphql`
  query PostsQueryAndPostsQuery {
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

export default Contact;
