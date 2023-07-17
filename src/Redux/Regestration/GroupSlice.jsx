import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { accoutTypeByIdUrl } from "../../utils/Url";

const groupSlice = createSlice({
  name: 'group',
  initialState: {
    GroupData: []
  },
  reducers: {
    setAccountTypeData(state, action) {
      state.GroupData = action.payload;
    }
  }
});

export const { setAccountTypeData } = groupSlice.actions;
export default groupSlice.reducer;

export function fetchGroupDataByaccountId(accountId) {
  
  return async function fetchGroupDataThunk(dispatch, getState) {
    try {
      const response = await axios.get(`${accoutTypeByIdUrl}=${accountId}`, {
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
