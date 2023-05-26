
import { configureStore } from "@reduxjs/toolkit";
import groupSlice from './Regestration/GroupSlice'
import ledgerSlice from "./Regestration/LedgerSlice";
import subLedgerSlice from "./Regestration/SubLedgerSlice";
const store = configureStore({
  reducer: {
    group: groupSlice,
    ledger: ledgerSlice,
    subLedger: subLedgerSlice,
  },
});
export default store;