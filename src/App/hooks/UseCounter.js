import { decrement, increment, selectCount, set } from "../features/counter/CounterSlice";

import UseActions from "../../lib/global-hooks/UseActions";
import { useSelector } from "react-redux";

const UseCounter = () => {
    const count = useSelector(selectCount);
    const actions = UseActions({ increment, decrement, set });

    return [actions, count];
};
export default UseCounter;
