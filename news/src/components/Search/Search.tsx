import React, { useContext } from 'react';
import './search.scss';
import { StoreContext } from '../../App';

function Search() {
  const {inputValueHook, handleSearch, setInputValue} = useContext(StoreContext)
  const handleInput = (text: string) => {
    setInputValue(text)
  }
  return (
    <div className="search__wrapper">
      Filter by keywords
      <input
        onChange={(e) => {
          handleInput(e.target.value);
        }
      }
      onKeyDown={(e) => {e.key === 'Enter' ? handleSearch() : console.log()}}
        value={inputValueHook}
        placeholder="microsoft"
        className="input-search"
      />
    </div>
  );
}

export default Search;
