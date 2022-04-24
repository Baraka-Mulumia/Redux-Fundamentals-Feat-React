import { decrement, increment, set } from "../actions";

import UseActions from "./UseActions";
import { useSelector } from "react-redux";

const UseCounter = () => {
	const count = useSelector((state) => state.count);
	const actions = UseActions({ increment, decrement, set });

	return [actions, count];
};
export default UseCounter;
