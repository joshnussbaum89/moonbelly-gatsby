import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// Components
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import MobileNav from './MobileNav';
import SocialIcons from './SocialIcons';
import DesktopNav from './DesktopNav';

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

  .hamburger:hover,
  .search-icon:hover {
    color: var(--purple);
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
  @media (min-width: 900px) {
    nav {
      margin: 1rem 2rem;
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
  const postsLength = data.posts.nodes.length;
  const inputEl = useRef(null);

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

  const [titles, slugs] = handleSearch();

  return (
    <NavStyles>
      <nav>
        <SocialIcons />
        <DesktopNav
          search={search}
          inputEl={inputEl}
          inputValue={inputValue}
          toggleSearch={toggleSearch}
          editSearchInput={editSearchInput}
          postsLength={postsLength}
          titles={titles}
          slugs={slugs}
          setInputValue={setInputValue}
        />
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
