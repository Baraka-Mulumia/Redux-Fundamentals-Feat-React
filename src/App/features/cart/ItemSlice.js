import { createSlice } from "@reduxjs/toolkit";
import { generate as shortid } from "shortid";

export const initialState = [
    {
        name: "Awesome Tofu Roast",
        uuid: shortid(),
        price: 14,
        quantity: 1,
    },
    {
        name: "Vegan Ham Sandwich",
        uuid: shortid(),
        price: 12,
        quantity: 1,
    },
];

const ItemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addNewItem(state, action) {
            let item = { uuid: shortid(), quantity: 1, ...action.payload };
            state.push(item);
        },
        removeItem(state, action) {
            return state.filter((item) => item.uuid !== action.payload);
        },
        updatePrice(state, action) {
            let item = state.find((item) => item.uuid === action.payload.uuid);
            item.price = action.payload.price;
        },
        updateQuantity(state, action) {
            let item = state.find((item) => item.uuid === action.payload.uuid);
            item.quantity = action.payload.quantity;
        },
    },
});

export const { addNewItem, removeItem, updatePrice, updateQuantity } = ItemSlice.actions;

export default ItemSlice.reducer;
