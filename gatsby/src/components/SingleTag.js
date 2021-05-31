import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagStyles = styled.li`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border: 1px solid var(--darkPurple);
  border-radius: 20px;
  padding: 0.6rem;
  margin: 0.2rem;
  transition: 0.2s;
  :hover {
    background: var(--pink);
  }
`;

const SingleTag = ({ tag }) => {
  return (
    <Link to={`/category/${tag}`}>
      <TagStyles className='tag-name'>{tag}</TagStyles>
    </Link>
  );
};

export default SingleTag;
