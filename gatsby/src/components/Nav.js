import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import {
  AiOutlineYoutube,
  AiOutlineSearch,
  AiOutlineMenu,
} from 'react-icons/ai';
import { Link } from 'gatsby';

const NavStyles = styled.div`
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

  /* Site navigation */
  ul {
    display: none;
  }
  ul > li {
    align-self: center;
    list-style-type: none;
    padding-left: 2rem;
    transition: 0.2s;
  }
  ul > li:not(:last-child):hover {
    transform: translateY(-2px);
  }
  ul > li > a {
    color: var(--darkPurple);
    transition: 0.2s;
    text-decoration: none;
  }
  .social-icons a:hover,
  .hamburger:hover,
  .search-icon:hover,
  ul > li > a:hover {
    color: var(--purple);
  }

  /* Mobile nav */
  .hamburger {
    cursor: pointer;
    transition: 0.2s;
    display: block;
  }

  /* Search */
  .search {
    align-self: center;
    display: flex;
  }
  .search-icon {
    align-self: center;
    transition: 0.2s;
    cursor: pointer;
  }
  .search-input {
    margin-left: 2rem;
    padding: 0.4rem;
    width: 10rem;
    border: 1px solid var(--darkPurple);
    border-radius: 2px;
    font-size: var(--small);
    color: var(--darkPurple);
  }

  /* Medium screens */
  @media (min-width: 768px) {
    nav {
      margin: 1rem 2rem;
    }
    ul {
      display: flex;
      flex-direction: row;
    }
    .hamburger {
      display: none;
    }
  }
`;

const Nav = () => {
  const [search, toggleSearch] = useState(false);

  return (
    <>
      <NavStyles>
        <nav>
          <div className='social-icons'>
            <a href='#'>
              <ImPinterest2 size='1.5rem' />
            </a>
            <a href='#'>
              <AiOutlineYoutube size='1.5rem' />
            </a>
            <a href='#'>
              <AiOutlineInstagram size='1.5rem' />
            </a>
          </div>
          <ul>
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
            <li className='search'>
              <AiOutlineSearch
                size='1.5rem'
                className='search-icon'
                onClick={() => toggleSearch(!search)}
              />
              <input
                className='search-input'
                type='text'
                style={{ display: `${search === false ? 'none' : 'flex'}` }}
                placeholder='Search'
              />
            </li>
          </ul>
          {/* TODO: Add mobile nav modal container onClick*/}
          <AiOutlineMenu className='hamburger' size='1.75rem' />
        </nav>
      </NavStyles>
    </>
  );
};

export default Nav;
