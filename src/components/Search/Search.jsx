import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <>
            {searchActive ? (
                <input
                    className='search-input'
                    type="text"
                    placeholder="Введите, что нужно найти"
                    onBlur={() => setSearchActive(false)}
                />
            ) : (
                <img
                    onClick={() => setSearchActive(true)}
                    src="img/Forma 1.svg"
                    alt="forma1"
                />
            )}
        </>
    );
};

export default Search;