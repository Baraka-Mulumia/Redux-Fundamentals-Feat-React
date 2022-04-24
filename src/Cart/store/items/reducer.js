// @ts-nocheck

import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from "./actions";

import produce from "immer";
import { generate as shortid } from "shortid";

export const initialItems = [
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

export const reducer = produce((state = initialItems, action) => {
    let item;
    switch (action.type) {
        case ITEM_ADDED:
            item = { uuid: shortid(), quantity: 1, ...action.payload };
            state.push(item);
            break;

        case ITEM_REMOVED:
            return state.filter((item) => item.uuid !== action.payload);

        case ITEM_PRICE_UPDATED:
            item = state.find((item) => item.uuid === action.payload.uuid);
            item.price = action.payload.price;
            break;

        case ITEM_QUANTITY_UPDATED:
            item = state.find((item) => item.uuid === action.payload.uuid);
            item.quantity = action.payload.quantity;
            break;

        default:
            return state;
    }
}, initialItems);

export default reducer;
