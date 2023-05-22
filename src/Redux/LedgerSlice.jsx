import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ledgerByGroupId } from "../utils/Url";

const ledgerSlice = createSlice({
    name: 'ledger',
    initialState: {
        data: [],
    },
    reducers: {
        setLedgerData(state, action) {
            state.data = action.payload;
        }
    }
})
export const {setLedgerData}=ledgerSlice.actions
export default ledgerSlice.reducer;


export function fetchGroupLedgerData(selectedGroupTypeId){
    return async function fetchGroupLedgerDataThunk(dispatch,getState)
    {
        try {
            const response=await axios.get(`${ledgerByGroupId}=${selectedGroupTypeId}`,{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('adminToken')
                }
            })
            dispatch(setLedgerData(response.data))
        } catch (error) {
            
        }
    }
}