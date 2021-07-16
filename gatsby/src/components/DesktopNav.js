import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import SearchBar from './SearchBar';
import SearchBarOptions from './SearchBarOptions';

const DesktopNavStyles = styled.ul`
  display: none;

  > li:not(:last-child) {
    align-self: center;
    list-style: none;
    padding-left: 2rem;
    transition: 0.2s;
  }
  > li:nth-child(-n + 4):hover {
    transform: translateY(-2px);
  }
  > li > a {
    color: var(--darkPurple);
    transition: 0.2s;
    text-decoration: none;
  }
  > li > a:hover {
    color: var(--purple);
  }

  .search-options {
    background: white;
    list-style: none;
    position: absolute;
    width: 590px;
    z-index: 100;
    top: 2.2rem;
    right: 2rem;
    border-radius: 2px;
  }

  /* Search */
  .search-container {
    display: flex;
    align-items: center;
  }
  .search-container__icon {
    align-self: center;
    transition: 0.2s;
    cursor: pointer;
  }
  .search-container__input {
    margin-left: 2rem;
    padding: 0.4rem;
    width: 10rem;
    border: 1px solid var(--darkPurple);
    border-radius: 2px;
    font-size: var(--small);
    color: var(--darkPurple);
  }

  /* Medium screens */
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;

const DesktopNav = ({
  search,
  inputEl,
  inputValue,
  toggleSearch,
  editSearchInput,
  postsLength,
  titles,
  slugs,
}) => {
  return (
    <DesktopNavStyles>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/recipes'>Recipes</Link>
      </li>
      <li>
        <Link to='/diy'>DIYs</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li className='search-container'>
        <SearchBar
          search={search}
          inputEl={inputEl}
          inputValue={inputValue}
          toggleSearch={toggleSearch}
          editSearchInput={editSearchInput}
        />
      </li>
      <li className='search-options'>
        <SearchBarOptions
          search={search}
          postsLength={postsLength}
          titles={titles}
          slugs={slugs}
        />
      </li>
    </DesktopNavStyles>
  );
};

export default DesktopNav;
