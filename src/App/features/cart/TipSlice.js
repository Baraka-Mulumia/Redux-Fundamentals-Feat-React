import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
    name: "tip",
    initialState: 10,
    reducers: {
        updateTip(state, action) {
            return action.payload;
        },
    },
});

export const { updateTip } = tipSlice.actions;

export default tipSlice.reducer;
