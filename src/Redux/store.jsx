
import { configureStore } from "@reduxjs/toolkit";
import AccountTypeSlice from "./AccountTypeSlice";
const store = configureStore({
  reducer: {
    accountType: AccountTypeSlice,
  },
});
export default store;