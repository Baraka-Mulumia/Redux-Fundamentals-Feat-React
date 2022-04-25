import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

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
        toggle(state, action) {
            const task = state.find((task) => task.uuid === action.payload.taskId);
            task.completed = action.payload.completed;
        },
        assignToUser(state, action) {
            const task = state.find((task) => task.uuid === action.payload.taskId);
            task.assignedTo = action.payload.humanId;
        },
    },
});

export const { addTask } = taskSlice.actions;

export const toggle = createAction("tasks/toggle", (taskId, completed) => ({
    payload: { taskId, completed },
}));

export const assignToUser = createAction("tasks/assignToUser", (taskId, humanId) => ({
    payload: { taskId, humanId },
}));
export default taskSlice.reducer;
