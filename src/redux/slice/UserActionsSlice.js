import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalState: false,
    modalScaleValue: 0,
    message: "",
    status: "",
    para: ""
};

const UserActions = createSlice({
    name: 'UserActions',
    initialState,
    reducers: {
        setModalState: (state, { payload }) => {
            state.modalState = payload.action;
            state.modalScaleValue = payload.action ? 1 : 0;
            state.message = payload.message;
            state.status = payload.status;
            state.para = payload.para;
        }
    },

});

export const { setModalState } = UserActions.actions;


export default UserActions.reducer;
