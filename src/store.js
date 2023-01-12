import { configureStore } from '@reduxjs/toolkit'

import listReducer from './features/list/listSlice'

export default configureStore({
    reducer: {
      list:listReducer,
    }
  })