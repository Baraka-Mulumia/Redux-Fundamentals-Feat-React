import { addTask, assignToUser, toggle } from "../features/chores/TaskSlice";
import { selectHumans, selectTasks } from "../features/chores/selectors";

import UseActions from "../../lib/global-hooks/UseActions";
import { addHuman } from "../features/chores/HumanSlice";
import { useSelector } from "react-redux";

const UseChores = () => {
    const tasks = useSelector(selectTasks);
    const humans = useSelector(selectHumans);

    const actions = UseActions({ addTask, addHuman, toggle, assignToUser });

    return [actions, tasks, humans];
};

export default UseChores;
