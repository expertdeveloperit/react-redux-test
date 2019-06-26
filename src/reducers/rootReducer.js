import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import peopleReducer from "./peopleReducer";
export default combineReducers({
  simpleReducer,
  peopleReducer
});
