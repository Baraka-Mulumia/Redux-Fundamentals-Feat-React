import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import humanReducer from "../features/chores/HumanSlice";
import itemsReducer from "../features/cart/ItemSlice";
import tasksReducer from "../features/chores/TaskSlice";
import tipReducer from "../features/cart/TipSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        items: itemsReducer,
        tip: tipReducer,
        tasks: tasksReducer,
        humans: humanReducer,
    },
});

export default store;
