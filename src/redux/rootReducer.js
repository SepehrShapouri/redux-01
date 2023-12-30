import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./milk/milkReducer";
import userReducer from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  user:userReducer
});
