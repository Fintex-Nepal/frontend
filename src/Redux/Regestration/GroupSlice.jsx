import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { accountTypesUrl } from "../../utils/Url";
const groupSlice=createSlice({
    name:'group',
    initialState:{
        accountTypeData:[]
    },
    reducers:{
        setAccountTypeData(state,action){
            state.accountTypeData=action.payload;
        }
    }
});

export const {setAccountTypeData} =groupSlice.actions;
export default groupSlice.reducer;

export function fetchAccountType() {
    return async function fetchAccountTypeThunk(dispatch, getState) {
      try {
        const response = await axios.get(accountTypesUrl, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
          }
        });
        dispatch(setAccountTypeData(response.data));
      } catch (error) {
        console.error(error);
      }
    };
  }
  