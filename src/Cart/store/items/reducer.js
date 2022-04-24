import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from "./actions";

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

export const reducer = (state = initialItems, action) => {
    switch (action.type) {
        case ITEM_ADDED:
            const item = { uuid: shortid(), quantity: 1, ...action.payload };
            return [...state, item];

        case ITEM_REMOVED:
            return state.filter((item) => item.uuid !== action.payload);

        case ITEM_PRICE_UPDATED:
            return state.map((item) => {
                if (item.uuid === action.payload.uuid) {
                    return { ...item, price: action.payload.price };
                }
                return item;
            });
        case ITEM_QUANTITY_UPDATED:
            return state.map((item) => {
                if (item.uuid === action.payload.uuid) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
        default:
            return state;
    }
};

export default reducer;
