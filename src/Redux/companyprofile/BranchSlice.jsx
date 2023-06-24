import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllBranches } from "../../utils/Url";
import { STATUS } from "../Regestration/SubLedgerSlice";
const branchSlice = createSlice({
    name: 'branch',
    initialState: {
        branches: [],
        branchFetchStatus: STATUS.IDLE,
    },
    reducers: {
        setBranches(state, action) {
            state.branches = action.payload;
        },
        setbranchFetchStatus(state, action) {
            state.branchFetchStatus = action.payload;
        },
    }
});

export const { setBranches, setbranchFetchStatus } = branchSlice.actions;

export default branchSlice.reducer;

export function fetchBranchData(){
    return async function fetchBranchDataThunk(dispatch,getState){
        try {
            dispatch(setbranchFetchStatus(STATUS.LOADING));
            const response=await axios.get((getAllBranches),{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('sAdminToken')
                }
            });
           dispatch(setBranches(response.data))
           dispatch(setbranchFetchStatus(response.IDLE))
        } catch (error) {
            dispatch(setbranchFetchStatus(STATUS.ERROR))
        }
    }
}
