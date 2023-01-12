import React from "react";
import EachList from "./EachList";
import CreateList from "./CreateList";
import { useSelector, useDispatch } from "react-redux";

const Lists = () => {
  const selection = useSelector((state) => state.list.listProps);

  const List = selection.map((j) => (
    <EachList note={j.note} id={j.id} key={j.key} />
  ));

  return <div className="lists">
    <>
    <CreateList/>
    {List}
    </>
  </div>;
};

export default Lists;
