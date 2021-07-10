import React from 'react'
import "./searchBox.css"

const SearchBox = ({placeholder,onChangeHandle}) => {
    return (
        <div>
            <input  className="searchBox" type="search" placeholder={placeholder}  onChange={onChangeHandle}/>
        </div>
    )
}

export default SearchBox
