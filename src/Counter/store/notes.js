import {
	applyMiddleware,
	bindActionCreators,
	combineReducers,
	compose,
	createStore,
} from "redux";

//store enhancer

export const reduxNotes = () => {
	const reducer = (state) => state;

	const monitorEnhancer =
		(createStore) => (reducer, initialState, enhancer) => {
			const monitoredReducer = (state, action) => {
				const start = performance.now();
				const newState = reducer(state, action);
				const end = performance.now();
				const diff = end - start;
				console.log(diff);
				return newState;
			};

			return createStore(monitoredReducer, initialState, enhancer);
		};

	const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
		const logReducer = (state, action) => {
			console.log({ "OLD STATE": state, action });
			const newState = reducer(state, action);
			console.log({ "NEW STATE": state, action });

			return newState;
		};

		return createStore(logReducer, initialState, enhancer);
	};

	const logMiddleWare = (store) => (next) => (action) => {
		console.log({ "OLD STATE": store.getState(), action });
		next(action);
		console.log({ "NEW STATE": store.getState(), action });
	};
	const monitorMiddleWare = (store) => (next) => (action) => {
		const start = performance.now();
		next(action);
		const end = performance.now();
		const diff = end - start;
		console.log(diff);
	};

	// const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));
	const store = createStore(
		reducer,
		applyMiddleware(logMiddleWare, monitorMiddleWare)
	);

	store.dispatch({ type: "Hello" });
};

(() => {
	const makeLouder = (string) => string.toUpperCase();
	const repeatThrice = (string) => string.repeat(3);
	const embolden = (string) => string.bold();

	const makeLouderRepeatThriceAndEmbolden = () =>
		compose(makeLouder, repeatThrice, embolden);

	const res = makeLouderRepeatThriceAndEmbolden();
	console.log(res("Rahul Raha"));

	const initialState = { value: 0 };

	const INCREMENT = "counter/increment";
	const ADD = "counter/add";

	const incrementAction = { type: INCREMENT };

	//an action creator
	const increment = () => ({ type: INCREMENT });
	const add = (amount) => ({ type: ADD, payload: amount });

	const reducer = (state = initialState, action) => {
		if (action.type === INCREMENT) {
			return { value: state.value + 1 };
		}

		if (action.type === ADD) {
			return { value: state.value + action.payload };
		}

		return state;
	};
	const store = createStore(reducer);

	const subscriber = () => console.log("SUBSCRIBER", store.getState());

	const actions = bindActionCreators({ add, increment }, store.dispatch);

	// store.subscribe(subscriber);

	actions.increment();

	actions.add(5);

	// console.log(actions);
	console.log(store.getState());
})();

//combining reducers
(() => {
	const initialState = {
		users: [
			{ id: 1, name: "Steve" },
			{ id: 2, name: "Jax" },
		],
		tasks: [
			{ title: "File the TPS reports" },
			{ title: "Order more energy drinks" },
		],
	};
	const ADD_TASK = "ADD_TASK";
	const ADD_USER = "ADD_USER";

	const userReducer = (users = initialState.users, action) => {
		if (action.type === ADD_USER) {
			return [...users, { name: action.payload }];
		}
		return users;
	};
	const taskReducer = (tasks = initialState.tasks, action) => {
		if (action.type === ADD_TASK) {
			return [...tasks, { title: action.payload }];
		}
		return tasks;
	};

	const addTask = (title) => ({ type: ADD_TASK, payload: title });
	const addUser = (name) => ({ type: ADD_USER, payload: name });

	const reducer = combineReducers({ tasks: taskReducer, users: userReducer });

	const store = createStore(reducer);

	const actions = bindActionCreators({ addTask, addUser }, store.dispatch);

	actions.addTask("Have more burgers");
	actions.addUser("JJ");

	console.log(store.getState());

	// const reducer = (state = initialState, action) => {
	// 	if (action.type === ADD_USER) {
	// 		return {
	// 			...state,
	// 			user: [...state.users, action.payload],
	// 		};
	// 	}
	// 	if (action.type === ADD_TASK) {
	// 		return {
	// 			...state,
	// 			tasks: [...state.tasks, action.payload],
	// 		};
	// 	}
	// };
})();
