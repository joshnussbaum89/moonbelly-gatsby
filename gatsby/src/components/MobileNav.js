import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MobileNavStyles = styled.div`
  .mobile-nav {
    position: absolute;
    text-align: center;
    font-size: var(--large);
    z-index: 1;
    margin: -1rem;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    background: var(--purpleTransparent);
    box-shadow: 2px 2px 40px grey;
    ul {
      list-style: none;
      li {
        margin-bottom: 3.5rem;
      }
      a:hover {
        color: var(--cream);
      }
    }
  }

  .mobile-nav-closed {
    display: none;
    height: 0vh;
    width: 0vw;
    opacity: 0;
    transition: 0.2s;
  }

  .mobile-nav-opened {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 50% 0;
    opacity: 1;
    width: 100vw;
    height: 100vh;
    transform-origin: right;
    transition: 0.4s;
  }

  @media (min-width: 900px) {
    .mobile-nav {
      margin: -1rem -1rem 0 0;
    }
  }
`;

const MobileNav = ({ menuIsOpen, toggleMenuIsOpen }) => {
  return (
    <MobileNavStyles>
      <div
        className={
          menuIsOpen
            ? 'mobile-nav mobile-nav-opened'
            : 'mobile-nav mobile-nav-closed'
        }
      >
        <ul>
          <li>
            <Link to='/' onClick={() => toggleMenuIsOpen(!menuIsOpen)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/recipes' onClick={() => toggleMenuIsOpen(!menuIsOpen)}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to='/diy' onClick={() => toggleMenuIsOpen(!menuIsOpen)}>
              DIYs
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => toggleMenuIsOpen(!menuIsOpen)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </MobileNavStyles>
  );
};

export default MobileNav;
