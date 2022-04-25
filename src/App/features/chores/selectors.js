export const selectTasks = (state) => state.tasks;
export const selectHumans = (state) => state.humans;

export const selectHumanTasks = (state, humanId) =>
    state.tasks.filter((task) => task.assignedTo === humanId);
