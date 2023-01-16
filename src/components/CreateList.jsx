import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addList, searchList, setCurrentList } from "../features/list/listSlice";

const CreateList = () => {
  const dispatch = useDispatch();
  const searchValue = "";
  const addListAction = () => {
    dispatch(addList());
    dispatch(searchList({searchValue}))
  };
  return (
    <div className="eachList" onClick={addListAction}>
      <div className="createNew">Create New</div>
      <FaPlusSquare />
    </div>
  );
};

export default CreateList;
