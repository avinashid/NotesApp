import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentList } from "../features/list/listSlice";

const EachList = ({ id, note }) => {
  const dispatch = useDispatch();
  const listOnClick = () => {
    dispatch(setCurrentList({ note, id }));
  };
  let temp = useSelector(
    (state) => state.list.listProps.filter((f) => f.id === id)[0].title
  );
  console.log(temp);
  if (note.length > 2) {
    temp = note;
  }
  return (
    <div className="eachList" onClick={listOnClick}>
      {temp.slice(0, 25)}
    </div>
  );
};

export default EachList;
