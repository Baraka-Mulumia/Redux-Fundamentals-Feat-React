import { createSlice, nanoid } from "@reduxjs/toolkit";

import { assignToUser } from "./TaskSlice";

const createHuman = (name) => ({
    name,
    uuid: nanoid(),
    taskIds: [],
});

const humanSlice = createSlice({
    name: "humans",
    initialState: [
        createHuman("Steve"),
        createHuman("Marc"),
        createHuman("Tanner"),
        createHuman("Aisha"),
    ],
    reducers: {
        addHuman(state, action) {
            state.push(createHuman(action.payload));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(assignToUser, (state, action) => {
            for (const human of state) {
                if (human.uuid === action.payload.humanId) {
                    human.taskIds.push(action.payload.taskId);
                } else {
                    human.taskIds = human.taskIds.filter((id) => id !== action.payload.taskId);
                }
            }
        });
    },
});

export const { addHuman } = humanSlice.actions;

export default humanSlice.reducer;
