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
    transition: 0.2s;
  }
  .search-options__li:hover {
    background: var(--purpleLight);
    border-radius: 2px;
    cursor: pointer;
  }
  .search-options__li a {
    display: inline-block;
    padding: 1rem;
    width: 100%;
    height: 100%;
    transition: 0.2s;
  }
`;

const SearchBarOptions = ({
  search,
  postsLength,
  titles,
  slugs,
  setInputValue,
  toggleSearch,
}) => {
  const closeSearchAndClearnInput = () => {
    setInputValue('');
    toggleSearch(!search);
  };

  return (
    <SearchBarOptionsStyles
      style={{ display: `${search === false ? 'none' : 'flex'}` }}
    >
      <ul className='search-options__ul'>
        {postsLength === titles.length
          ? null
          : titles.map((title, key) => (
              <li className='search-options__li' key={key}>
                <Link
                  to={`/post/${slugs[key]}`}
                  onClick={() => closeSearchAndClearnInput()}
                >
                  {title}
                </Link>
              </li>
            ))}
      </ul>
    </SearchBarOptionsStyles>
  );
};

export default SearchBarOptions;
