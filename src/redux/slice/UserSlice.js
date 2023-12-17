import { createSlice } from '@reduxjs/toolkit';
import { createUser } from "../../api/Api";

const initialState = {
    userDetail: {},
    loading: false
};

const Users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.userDetail = {};
        },
        loginUserData: (state, { payload }) => {
            state.userDetail = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(createUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            state.userDetail = payload;
        });
        builder.addCase(createUser.rejected, (state, { payload }) => {
            state.error = payload;
            state.loading = false;
        });
    },

});

export const { logoutUser, loginUserData } = Users.actions;


export default Users.reducer;
