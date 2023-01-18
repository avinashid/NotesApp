import { createSlice, nanoid } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    search: "",
    listProps: [
      {
        title: "New Note 1",
        key: "key1",
        id: "id1",
        note: "",
        isVisible: true,
      },
    ],
    currentList: {
      id: "id1",
      note: "",
    },
  },
  reducers: {
    setCurrentList: (state, action) => {
      (state.currentList.id = action.payload.id);
      (state.currentList.note = action.payload.note);
    },
    addList: (state,action) => {
      state.listProps.unshift({
        title: "New Note " + (state.listProps.length + 1),
        id: action.payload.id,
        key: nanoid(),
        note: "",
        isVisible: true,
      });
      
    },
    updateList: (state, action) => {
      state.listProps = state.listProps.map((s) =>
        s.id === action.payload.id
          ? { ...s, note: action.payload.note }
          : { ...s }
      );
    },
    deleteList: (state, action) => {
      let i;
      state.listProps.forEach((arr, index) => {
        if (arr.id === action.payload.id) {
          i=index;
        }
      });
      state.listProps.splice(i,1);
      // state.currentList.id="id1"
    },
    searchList: (state, action) => {
      state.search = action.payload.searchValue;
      state.listProps = state.listProps.map((s) =>
        s.note.includes(state.search)
          ? { ...s, isVisible: true }
          : { ...s, isVisible: false }
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchList, deleteList, setCurrentList, updateList, addList } =
  listSlice.actions;

export default listSlice.reducer;
