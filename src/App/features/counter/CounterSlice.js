import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },

        set(state, action) {
            state.count = action.payload;
        },
    },
});

export const { increment, decrement, set } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;
export default counterSlice.reducer;
