import { TIP_PERCENTAGE_UPDATED } from "./actions";

export const initialState = {
    tipPercentage: 10,
};

export const reducer = (state = initialState, action) => {
    if (action.type === TIP_PERCENTAGE_UPDATED) {
        return {
            ...state,
            tipPercentage: action.payload,
        };
    }
    return state;
};

export default reducer;
