import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components
import DividerSvg from '../components/svgs/DividerSvg';
import SingleTag from '../components/SingleTag';

const DiyContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  gap: 4rem;

  .diy-tags {
    margin-top: 2rem;
    position: relative;
  }

  .diys h2,
  .diy-tags h2 {
    margin: 2rem 0;
  }

  .diys h3 {
    margin: 2rem 0 1rem;
  }

  .diy-img {
    border-radius: 2px;
    width: 100%;
    margin: auto;
    display: block;
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
    margin: 2rem 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;

    .diy-tags {
      margin-top: initial;
      padding-left: 3rem;
    }

    .diys,
    .diy-tags {
      margin: 2rem 0 8rem;
    }
  }
`;

const SingleDiy = ({ diy, text }) => {
  const image = getImage(diy.cover.asset.gatsbyImageData);
  const textTeaser = `${text.substring(0, 30)}`;

  return (
    <>
      <h3>{diy.title}</h3>
      <p>
        {textTeaser}
        <Link to={`/post/${diy.slug.current}`}>
          ... <strong className='read-more'>Read More</strong>
        </Link>
      </p>
      <Link to={`/post/${diy.slug.current}`}>
        <GatsbyImage className='diy-img' image={image} alt={diy.title} />
      </Link>
    </>
  );
};

const diy = ({ data }) => {
  // diy info
  const diys = data.posts.nodes.filter((diy) => diy.diy === true);

  // all diy tags for corresponding posts
  const tags = diys
    .map((diy) => diy.tag)
    .map((tag) => tag.map((tag) => tag.tag))
    .flat(1)
    .map((tag) =>
      tag.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    );

  // remove duplicate tags
  const uniqueTags = [...new Set(tags)];

  return (
    <DiyContainer>
      <div className='diys'>
        <h2>Moonbelly Makes ~ Diys</h2>
        {diys.map((diy) => (
          <SingleDiy
            diy={diy}
            text={diy.text[0].children[0].text}
            key={diy.id}
          />
        ))}
      </div>
      <div className='diy-tags'>
        <DividerSvg />
        <h2>Categories</h2>
        <ul>
          {uniqueTags.map((tag, index) => (
            <SingleTag tag={tag} key={index} />
          ))}
        </ul>
      </div>
    </DiyContainer>
  );
};

export const query = graphql`
  query DiyQuery($category: [String]) {
    posts: allSanityPost(
      sort: { order: DESC, fields: _createdAt }
      filter: { tag: { elemMatch: { tag: { in: $category } } } }
    ) {
      nodes {
        id
        diy
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
  }
`;

export default diy;
