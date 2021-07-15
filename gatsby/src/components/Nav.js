// TODO:
// Break this into smaller, cleaner components

import React, { useState, useRef } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import {
  AiOutlineYoutube,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { Link } from 'gatsby';
import styled from 'styled-components';
import MobileNav from './MobileNav';

const NavStyles = styled.div`
  position: relative;

  nav {
    margin: 1rem 0;
    padding: 0.5rem 0;
    height: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: var(--medium);
  }
  /* Social Media Icons */
  .social-icons svg {
    padding-right: 2rem;
  }
  .social-icons a:hover {
    color: var(--purple);
  }

  /* Desktop navigation */
  .desktop-nav {
    display: none;
  }
  .desktop-nav > li:not(:last-child) {
    align-self: center;
    list-style: none;
    padding-left: 2rem;
    transition: 0.2s;
  }
  .desktop-nav > li:nth-child(-n + 4):hover {
    transform: translateY(-2px);
  }
  .desktop-nav > li > a {
    color: var(--darkPurple);
    transition: 0.2s;
    text-decoration: none;
  }
  .social-icons a:hover,
  .hamburger:hover,
  .search-icon:hover,
  .desktop-nav > li > a:hover {
    color: var(--purple);
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

  /* Hamburger and Mobile Nav close  */
  .hamburger,
  .mobile-close {
    z-index: 100;
    cursor: pointer;
    transition: 0.4s;
    display: block;
  }
  .mobile-close:hover {
    color: var(--cream);
  }

  /* Medium screens */
  @media (min-width: 768px) {
    nav {
      margin: 1rem 2rem;
    }
    .desktop-nav {
      display: flex;
      flex-direction: row;
    }
    .hamburger {
      display: none;
    }
    .mobile-nav {
      margin: -1rem -1rem 0 0;
    }
  }
`;

const Nav = ({ data }) => {
  const [search, toggleSearch] = useState(false);
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputEl = useRef(null);
  let postsLength = data.posts.nodes.length;

  const editSearchInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    const titles = data.posts.nodes
      .map((post) => post.title)
      .filter((post) => post.toLowerCase().includes(inputValue.toLowerCase()));
    const slugs = data.posts.nodes
      .map((post) => post.slug.current)
      .filter((post) => post.toLowerCase().includes(inputValue.toLowerCase()));

    return [titles, slugs];
  };

  let [titles, slugs] = handleSearch();

  return (
    <NavStyles>
      <nav>
        <div className='social-icons'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <ImPinterest2 size='1.5rem' />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <AiOutlineYoutube size='1.5rem' />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <AiOutlineInstagram size='1.5rem' />
          </a>
        </div>
        <ul className='desktop-nav'>
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
            <AiOutlineSearch
              size='1.5rem'
              className='search-container__icon'
              onClick={() => toggleSearch(!search)}
            />
            <input
              className='search-container__input'
              type='search'
              style={{ display: `${search === false ? 'none' : 'flex'}` }}
              placeholder='Search'
              ref={inputEl}
              onChange={(e) => editSearchInput(e)}
              value={inputValue}
            />
          </li>
          <li className='search-options'>
            <div style={{ display: `${search === false ? 'none' : 'flex'}` }}>
              <ul className='search-options__ul'>
                {postsLength === titles.length
                  ? null
                  : titles.map((title, key) => (
                      <li className='search-options__li' key={key}>
                        <Link to={`/post/${slugs[key]}`}>{title}</Link>
                      </li>
                    ))}
              </ul>
            </div>
          </li>
        </ul>
        {menuIsOpen ? (
          <AiOutlineClose
            className='mobile-close'
            size='1.75rem'
            onClick={() => toggleMenuIsOpen(!menuIsOpen)}
          />
        ) : (
          <AiOutlineMenu
            className='hamburger'
            size='1.75rem'
            onClick={() => toggleMenuIsOpen(!menuIsOpen)}
          />
        )}
      </nav>
      <MobileNav menuIsOpen={menuIsOpen} toggleMenuIsOpen={toggleMenuIsOpen} />
    </NavStyles>
  );
};

export default Nav;
