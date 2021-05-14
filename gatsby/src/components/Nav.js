import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import { Link } from 'gatsby';

const NavStyles = styled.div`
  nav {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: var(--medium);
  }

  .social-icons svg {
    padding: 0 1.2rem;
  }

  ul {
    display: flex;
    flex-direction: row;
  }
  ul > li {
    list-style-type: none;
    padding: 0 1.2rem;
    transition: 0.2s;
  }
  ul > li:hover {
    transform: translateY(-2px);
  }
  ul > li > a {
    color: var(--darkPurple);
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <>
      <NavStyles>
        <nav>
          <div className='social-icons'>
            <ImPinterest2 />
            <AiOutlineYoutube />
            <AiOutlineInstagram />
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
          </ul>
        </nav>
      </NavStyles>
    </>
  );
};

export default Nav;