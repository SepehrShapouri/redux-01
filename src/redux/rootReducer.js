import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./milk/milkReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
});
