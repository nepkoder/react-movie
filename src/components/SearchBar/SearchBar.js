import React from 'react';
import './searchbar.css'
const SearchBar = (props) => {
    const {onTextChange} = props
    return (
        <div className='search-bar'>
            <input onChange={(ev) => onTextChange(ev.target.value)} placeholder='Search Movie' />
        </div>
    );
};

export default SearchBar;