import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, setCurrentList } from "../features/list/listSlice";

const CreateList = () => {
  const dispatch = useDispatch();
  const addListAction = () => {
    dispatch(addList());
  };
  return (
    <div className="eachList" onClick={addListAction}>
      Create New
    </div>
  );
};

export default CreateList;
