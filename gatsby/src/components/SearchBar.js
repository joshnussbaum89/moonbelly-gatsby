import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({
  search,
  inputEl,
  inputValue,
  toggleSearch,
  editSearchInput,
}) => {
  return (
    <>
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
        autoFocus
      />
    </>
  );
};

export default SearchBar;
