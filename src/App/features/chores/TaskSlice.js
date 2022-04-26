import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
    title,
    uuid: nanoid(),
    assignedTo: "",
    completed: false,
});

const taskSlice = createSlice({
    name: "tasks",
    initialState: [
        createTask("Order More Energy Drinks"),
        createTask("Update Legacy codebase"),
        createTask("Review Interns Code"),
    ],
    reducers: {
        addTask(state, action) {
            state.push(createTask(action.payload));
        },
        toggle: {
            reducer(state, action) {
                const task = state.find((task) => task.uuid === action.payload.taskId);
                task.completed = action.payload.completed;
            },
            prepare(taskId, completed) {
                return { payload: { taskId, completed } };
            },
        },
        assignToUser: {
            reducer(state, action) {
                const task = state.find((task) => task.uuid === action.payload.taskId);
                task.assignedTo = action.payload.humanId;
            },
            prepare(taskId, humanId) {
                return { payload: { taskId, humanId } };
            },
        },
    },
});

export const { addTask, assignToUser, toggle } = taskSlice.actions;

export default taskSlice.reducer;
