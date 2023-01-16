import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchList } from "../features/list/listSlice";


const Search = () => {
    let dispatch=useDispatch();
    const onChangeSearch=(e)=>{
        let searchValue=e.target.value;
        dispatch(searchList({searchValue}))
    }
  return (
    <input
    value={useSelector(s=>s.list.search)}
      onChange={onChangeSearch}
      className="searchField"
      type="text"
      placeholder="&#128269; Search"
    ></input>
  );
};

export default Search;
