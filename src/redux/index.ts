import { combineReducers, createStore, applyMiddleware } from "redux";
import GenericReducer from "./GenericReducer";
import thunk from "redux-thunk";
import NormalizedDataReducer from "./NormalizedDataReducer";

const rootReducers = {
  GenericReducer,
  NormalizedDataReducer,
};

const store = createStore(combineReducers(rootReducers), applyMiddleware(thunk));

export type IRootState = {
  [k in keyof (typeof rootReducers)]: ReturnType<(typeof rootReducers)[k]>;
};

export default store;