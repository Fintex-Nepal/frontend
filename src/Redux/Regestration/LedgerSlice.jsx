import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { groupByAccountIdUrl } from "../../utils/Url";

const ledgerSlice = createSlice({
    name: 'ledger',
    initialState: {
        groupData: [],
    },
    reducers: {
        setGroupData(state, action) {
            state.groupData = action.payload;
        }
    }
})
export const {setGroupData}=ledgerSlice.actions
export default ledgerSlice.reducer;


export function fetchGroupData(selectedGroupTypeId){
    return async function fetchGroupDataThunk(dispatch,getState)
    {
        try {
            const response=await axios.get(`${groupByAccountIdUrl}=${selectedGroupTypeId}`,{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('adminToken')
                }
            })
            dispatch(setGroupData(response.data))
        } catch (error) {
            
        }
    }
}

