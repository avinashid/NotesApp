import React, { useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentList, updateList } from "../features/list/listSlice";

const ShowNote = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const dispatch = useDispatch();
  const select = useSelector((state) => state.list.currentList);
  const onChange = (e) => {
    let id = select.id;
    let note = e.target.value;
    dispatch(setCurrentList({ id, note }));
    dispatch(updateList({ id, note }));
  };
  return (
    <textarea
      ref={inputRef}
      onChange={onChange}
      className="showNote"
      value={useSelector((state) => state.list.currentList.note)}
      placeholder="You can start typing..."
    ></textarea>
  );
};

export default ShowNote;
