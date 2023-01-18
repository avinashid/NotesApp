import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addList, searchList, setCurrentList } from "../features/list/listSlice";

const CreateList = () => {
  const dispatch = useDispatch();
  const addListAction = () => {
    let id = nanoid();
    dispatch(addList({id}));
    dispatch(setCurrentList({id,note:""}))
    dispatch(searchList({searchValue:""}))
    // document.getElementById(state.currentList.id).style.background="blue";
  };
  return (
    <div className="eachList" onClick={addListAction}>
      <div className="createNew">Create New</div>
      <FaPlusSquare />
    </div>
  );
};

export default CreateList;
