import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const accountTypeSlice = createSlice({
  name: 'accountType',
  initialState: {
    data: []
  },
  reducers: {
    setAccountTypes(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setAccountTypes } = accountTypeSlice.actions;
export default accountTypeSlice.reducer;


export function fetchAccountType() {
  return async function fetchAccountTypeThunk(dispatch, getState) {
    try {
      const response = await axios.get('http://localhost:8080/accountsetup/accounttypes', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
        }
      });
      dispatch(setAccountTypes(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}
