// SearchBar.jsx
import React, {useEffect, useState, useRef, useCallback} from 'react';
import { FiSearch } from 'react-icons/fi'; // Ensure you import necessary icons or components
import "./searchbar.css";
import moodList from '../app/Data/moodList';
import genreList from '../app/Data/genreList';
import worldMusicList from '../app/Data/worldMusicList';

const SearchBar = ({ category, placeholder, searchValue, setSearchValue, showOptions, setShowOptions, onSelectOption }) => {
  const searchBarRef = useRef(null);

  const getCategoryList = useCallback(() => {
    switch(category) {
      case 'mood':
        return moodList;
      case 'genre':
        return genreList;
      case 'worldMusic':
        return worldMusicList;
      default:
        return [];
    }
  }, [category]);

  const [filteredOptions, setFilteredOptions] = useState(getCategoryList());

  useEffect(() => {
    const list = getCategoryList(); // getCategoryList is now stable across renders
    if (searchValue.trim()) {
      setFilteredOptions(
        list.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()))
      );
    } else {
      setFilteredOptions(list);
    }
  }, [searchValue, getCategoryList]); // Corrected dependency

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowOptions]); // This effect is only dependent on component mount and unmount

  return (
      <div className="search_bar" ref={searchBarRef}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="inputText"
          onFocus={() => setShowOptions(true)}
        />
      {showOptions && (
        <div className="options_menu">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onSelectOption(option);
                setSearchValue('');
                setShowOptions(false);
              }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
