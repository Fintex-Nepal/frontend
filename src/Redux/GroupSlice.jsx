import { createSlice } from "@reduxjs/toolkit";
import { accoutTypeByIdUrl } from "../utils/Url";
import axios from "axios";

const groupSlice=createSlice({
    name:'group',
    initialState:{
        groupType:[]
    },
    reducers:{
        setGroupTypes(state,action)
        {
            state.groupType=action.payload;
        }
    }
})

export const {setGroupTypes}=groupSlice.actions;
export default groupSlice.reducer;

export function fetchGroupType(selectedAccountType){
    return async function fetchGroupTypeThunk(dispatch,getState){
        try {
            const response=await  axios.get(`${accoutTypeByIdUrl}=${selectedAccountType}`,{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('adminToken')
                }
            })
            dispatch(setGroupTypes(response.data))
            
        } catch (error) {
            console.error(error);
        }
    }
}

