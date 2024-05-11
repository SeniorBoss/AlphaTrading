import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    allUsers: [],
    userToken: "",
    getOneUser: {},
  
};

const features = createSlice({
    name: "alphaTrading",
    initialState,
    reducers: {
        alphaUser: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },
        allUsers: (state, {payload}) => {
            state.allAdminUsers = payload;
            // console.log("All Admin Users:", payload);
        },
        oneUser: (state, {payload}) => {
            state.getOneUser = payload;
            // console.log("Get One User Data:", payload);
        },
        token: (state, {payload}) => {
            state.userToken = payload;
            // console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
            state.getOneUser = {};
            state.allAdminUsers = [];
           
        },
    },
});

export const {alphaUser, logout, token, oneUser, allUsers} =
    features.actions;

export default features.reducer;