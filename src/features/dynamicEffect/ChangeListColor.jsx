import { current } from "@reduxjs/toolkit";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ChangeListColor = () => {
  let currentID = useSelector((s) => s.list.currentList.id);
  useEffect(() => {
    if (document.getElementById(currentID)) {
      document.getElementById(currentID).style.background = "blue";
      document.getElementById(currentID).style.color = "white";
    }

    return () => {
      if (document.getElementById(currentID)) {
        document.getElementById(currentID).style.background = "beige";
        document.getElementById(currentID).style.color = "black";
      }
    };
  }, [currentID]);
  return <></>;
};

export default ChangeListColor;
