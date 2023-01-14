import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentList, deleteList } from "../features/list/listSlice";

const EachList = ({ id, note }) => {
  const dispatch = useDispatch();
  const listOnClick = () => {
    dispatch(setCurrentList({ note, id }));
  };
  let lastChar = useSelector((state) =>
    state.list.listProps.filter((f) => f.id === id)[0].title.slice(-1)
  );
  let temp = useSelector(
    (state) => state.list.listProps.filter((f) => f.id === id)[0].title
  );
  if (note.trim().length > 2) {
    temp = note;
    temp = temp.slice(0, 30);
    if (temp.trim().includes("\n")) {
      let end = temp.trim().indexOf("\n");
      temp = temp.slice(0, end);
    }
  }

  const deleteListAction = () => {
    dispatch(deleteList(id));
  };
  return (
    <div
      className="eachList"
      onClick={listOnClick}
      
    >
      <div className="lastCharEachList" data-last-character={lastChar.slice(-1)}></div>
      <div className="textInEachList" >{temp}</div>
      <FaTrash onClick={deleteListAction} />
    </div>
  );
};

export default EachList;
