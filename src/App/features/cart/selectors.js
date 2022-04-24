import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tip;

export const selectItem = (state, uuid) => state.items.find((item) => item.uuid === uuid);

export const selectItemTotal = createSelector(selectItem, (item) => item.price * item.quantity);

export const selectSubtotal = createSelector(selectItems, (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
    [selectSubtotal, selectTipPercentage],
    (subtotal, tipPercentage) => (subtotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
    [selectSubtotal, selectTipAmount],
    (subtotal, tipAmount) => subtotal + tipAmount
);
