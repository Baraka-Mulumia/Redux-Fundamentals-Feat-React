import { combineReducers, createStore } from "redux";

import itemsReducer from "./items/reducer";
import tipReducer from "./tip-percentage/reducer";

const reducer = combineReducers({ items: itemsReducer, tip: tipReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
