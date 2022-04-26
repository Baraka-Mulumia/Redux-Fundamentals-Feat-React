export const selectTasks = (state) => state.tasks;
export const selectHumans = (state) => state.humans.humans;

export const selectHumanTasks = (state, humanId) =>
    state.tasks.filter((task) => task.assignedTo === humanId);

export const selectHumansFetchError = (state) => state.humans.error;
export const selectHumansFetchLoadingState = (state) => state.humans.loading;
