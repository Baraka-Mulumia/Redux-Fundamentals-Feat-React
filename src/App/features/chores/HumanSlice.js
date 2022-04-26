import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

import { assignToUser } from "./TaskSlice";

const createHuman = (name) => ({
    name,
    uuid: nanoid(),
    taskIds: [],
});

export const fetchHumans = createAsyncThunk("humans/fetchHumans", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users;
});

const humanSlice = createSlice({
    name: "humans",
    initialState: {
        loading: false,
        error: {
            isError: false,
            message: null,
        },
        humans: [],
    },
    reducers: {
        addHuman(state, action) {
            state.humans.push(createHuman(action.payload));
        },
    },
    extraReducers: {
        [assignToUser]: (state, action) => {
            for (const human of state.humans) {
                if (human.uuid === action.payload.humanId) {
                    human.taskIds.push(action.payload.taskId);
                } else {
                    human.taskIds = human.taskIds.filter((id) => id !== action.payload.taskId);
                }
            }
        },
        [fetchHumans.fulfilled]: (state, action) => {
            state.humans = action.payload.map((user) => ({
                ...createHuman(user.name),
            }));
            state.loading = false;
        },
        [fetchHumans.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchHumans.rejected]: (state, action) => {
            state.error = {
                isError: true,
                message: "Failed to fetch Data",
            };
            state.loading = false;
        },
    },
});

export const { addHuman } = humanSlice.actions;

export default humanSlice.reducer;
