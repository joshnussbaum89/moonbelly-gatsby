import React, { useState } from 'react';
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
  .desktop-nav > li {
    align-self: center;
    list-style-type: none;
    padding-left: 2rem;
    transition: 0.2s;
  }
  .desktop-nav > li:not(:last-child):hover {
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

const Nav = () => {
  const [search, toggleSearch] = useState(false);
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);

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
            <li className='search'>
              <AiOutlineSearch
                size='1.5rem'
                className='search-icon'
                onClick={() => toggleSearch(!search)}
              />
              <input
                className='search-input'
                type='search'
                style={{ display: `${search === false ? 'none' : 'flex'}` }}
                placeholder='Search'
              />
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
        <MobileNav
          menuIsOpen={menuIsOpen}
          toggleMenuIsOpen={toggleMenuIsOpen}
        />
      </NavStyles>
    </>
  );
};

export default Nav;
