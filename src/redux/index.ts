import { combineReducers, createStore, applyMiddleware } from "redux";
import GenericReducer from "./GenericReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  GenericReducer,
} as any);

const store = createStore(rootReducers, applyMiddleware(thunk));

export type IRootState = {
  [k in keyof (typeof rootReducers)]: ReturnType<(typeof rootReducers)[k]>;
};

export default store;