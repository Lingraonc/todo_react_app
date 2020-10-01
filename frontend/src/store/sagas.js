import { all } from "redux-saga/effects";
import {
  watchSaveTodoItem,
  watchDeleteTodoItem,
  watchGetTodoList,
  watchUpdateTodoList,
} from "./todo-page/sagas";

export function* rootSaga() {
  yield all([
    watchGetTodoList(),
    watchSaveTodoItem(),
    watchDeleteTodoItem(),
    watchUpdateTodoList(),
  ]);
}
