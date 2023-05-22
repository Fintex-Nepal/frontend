
import { configureStore } from "@reduxjs/toolkit";
import AccountTypeSlice from "./AccountTypeSlice";
import groupSlice from './GroupSlice'
import ledgerSlic from './LedgerSlice';
const store = configureStore({
  reducer: {
    accountType: AccountTypeSlice,
    groupType: groupSlice,
    ledger: ledgerSlic,
  },
});
export default store;