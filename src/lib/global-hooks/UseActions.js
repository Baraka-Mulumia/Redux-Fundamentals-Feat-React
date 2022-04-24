import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const UseActions = (actions) => {
	const dispatch = useDispatch();

	return bindActionCreators(actions, dispatch);
};
export default UseActions;
