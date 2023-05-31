import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserByUserName } from "../../utils/Url";
import { STATUS } from "../Regestration/SubLedgerSlice";

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userData: [],
        userDataFetchStatus: STATUS.IDLE,
    },
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload;
        },
        setUserDataFetchStatus(state, action) {
            state.userDataFetchStatus = action.payload;
        },
    }
});

export const { setUserData, setUserDataFetchStatus } = userProfileSlice.actions;

export default userProfileSlice.reducer;


export function fetchUserDataByUserName(userName) {
    return async function fetchUserDataByUserNameThunk(dispatch, getState) {
        try {
            dispatch(setUserDataFetchStatus(STATUS.LOADING))
            const response = await axios.get(`${getUserByUserName}${userName}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
                }
            });
            dispatch(setUserData(response.data))
            dispatch(setUserDataFetchStatus(STATUS.IDLE))
        } catch (error) {
            dispatch(setUserDataFetchStatus(STATUS.ERROR))
        }
    }
}

