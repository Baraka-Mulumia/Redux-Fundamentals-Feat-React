import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import itemsReducer from "../features/cart/ItemSlice";
import tipReducer from "../features/cart/TipSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        items: itemsReducer,
        tip: tipReducer,
    },
});

export default store;
