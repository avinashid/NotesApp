import { createSlice, nanoid } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: 0,
    listProps: [
      {
        title:"New Note 1",
        key: "key1",
        id: "id1",
        note: "",
      },
    ],
    currentList: {
      id: "id1",
      note: "",
    },
  },
  reducers: {
    setCurrentList: (state, action) => {
      (state.currentList.note = action.payload.note),
        (state.currentList.id = action.payload.id);
    },
    addList: (state) => {
      state.listProps.unshift({
        title: "New Note " + (state.listProps.length + 1),
        id: nanoid(),
        key: nanoid(),
        note: "",
      });
    },
    updateList: (state, action) => {
      state.listProps = state.listProps.map((s) =>
        s.id === action.payload.id
          ? { ...s, note: action.payload.note }
          : { ...s }
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentList,
  updateList,
  addList,
} = listSlice.actions;

export default listSlice.reducer;
