
import { configureStore } from "@reduxjs/toolkit";
import groupSlice from './Regestration/GroupSlice'
const store = configureStore({
  reducer: {
      group:groupSlice,
  },
});
export default store;