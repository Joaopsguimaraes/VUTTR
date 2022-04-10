import React from "react";
import {GrFormSearch} from 'react-icons/gr'
import "./style.css"

const Search = () =>{
    return(
        <div className="box-search">
            <input type="text" name="search" placeholder="search"/>
            <input type="checkbox" name="searchOnly"/> <p>search in tags only</p>
        </div>
    )
}

export default Search;