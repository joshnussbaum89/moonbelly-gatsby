import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SearchBarOptionsStyles = styled.div`
  .search-options__ul {
    width: 100%;
    padding: 0;
    list-style: none;
  }
  .search-options__li {
    display: block;
  }
  .search-options__li:hover {
    background: var(--darkPurple);
    border-radius: 2px;
    cursor: pointer;
  }
  .search-options__li:hover a {
    color: white;
  }
  .search-options__li a {
    display: inline-block;
    padding: 1rem;
    width: 100%;
    height: 100%;
  }
`;

const SearchBarOptions = ({ search, postsLength, titles, slugs }) => {
  return (
    <SearchBarOptionsStyles
      style={{ display: `${search === false ? 'none' : 'flex'}` }}
    >
      <ul className='search-options__ul'>
        {postsLength === titles.length
          ? null
          : titles.map((title, key) => (
              <li className='search-options__li' key={key}>
                <Link to={`/post/${slugs[key]}`}>{title}</Link>
              </li>
            ))}
      </ul>
    </SearchBarOptionsStyles>
  );
};

export default SearchBarOptions;
