import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getLedgerByGroupId } from "../../utils/Url";
export const STATUS = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "Error",
});

const subLedgerSlice = createSlice({
    name: 'subLedger',
    initialState: {
        ledgerData: [],
    },
    reducers: {
        setLedgerData(state, action) {
            state.ledgerData = action.payload;
        }
    }
})

export const { setLedgerData } = subLedgerSlice.actions;
export default subLedgerSlice.reducer;

export function fetchLedgerData(selectedLedgerId) {

    return async function fetchLedgerDataThunk(dispatch, getState) {
        try {
            const response = await axios.get(`${getLedgerByGroupId}=${selectedLedgerId}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
                }
            })
            dispatch(setLedgerData(response.data))
        } catch (error) {

        }
    }
}