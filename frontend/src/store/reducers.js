import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { todoReducer } from "./todo-page/reducer";

export default combineReducers({
  todo: todoReducer,
  form: formReducer,
});
