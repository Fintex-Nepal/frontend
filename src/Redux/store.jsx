
import { configureStore } from "@reduxjs/toolkit";
import groupSlice from './Regestration/GroupSlice'
import ledgerSlice from "./Regestration/LedgerSlice";
const store = configureStore({
  reducer: {
      group:groupSlice,
      ledger:ledgerSlice,
  },
});
export default store;