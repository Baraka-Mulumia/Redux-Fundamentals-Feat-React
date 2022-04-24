import { TIP_PERCENTAGE_UPDATED } from "./actions";

export const reducer = (state = 0, action) => {
    if (action.type === TIP_PERCENTAGE_UPDATED) {
        return action.payload;
    }
    return state;
};

export default reducer;
