import React from 'react';
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
  return <TagStyles className='tag-name'>{tag}</TagStyles>;
};

export default SingleTag;
