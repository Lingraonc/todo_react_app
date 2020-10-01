import { call, takeEvery, put } from "redux-saga/effects";
import {
  GET_TODO_LIST_PROCESS,
  ADD_TODO_ITEM_PROCESS,
  UPDATE_TODO_LIST_PROCESS,
  DELETE_TODO_ITEM_PROCESS,
} from "../types";
import axios from "axios";
import {
  getTodoList,
  setTodoListLoading,
  setTodoListError,
  clearTodoList,
  addTodoItem,
  updateTodoList,
  deleteTodoItem,
} from "./actions";

//get todo list
function fetchTodoListData() {
  return axios.get("/todos/").then((res) => res.data);
}

function* workerGetTodoList() {
  yield put(setTodoListLoading(true));
  try {
    const data = yield call(fetchTodoListData);
    yield put(getTodoList(data));
  } catch (err) {
    yield put(clearTodoList());
    yield put(setTodoListError(err));
  }
}

export function* watchGetTodoList() {
  yield takeEvery(GET_TODO_LIST_PROCESS, workerGetTodoList);
}

//saving new todo
function saveTodoItem(data) {
  return axios.post("/todos/", data).then((res) => res.data);
}

function* workerSaveTodoItem(data) {
  try {
    const newItem = yield call(saveTodoItem, data.payload);
    yield put(addTodoItem(newItem));
  } catch (err) {
    yield put(setTodoListError(err));
  }
}

export function* watchSaveTodoItem() {
  yield takeEvery(ADD_TODO_ITEM_PROCESS, workerSaveTodoItem);
}

//update todo element
function updateTodo({ _id, ...data }) {
  return axios.put(`/todos/${_id}`, data).then((res) => res.data);
}

function* workerUpdateTodoList(data) {
  try {
    const updatedItem = yield call(updateTodo, data.payload);
    yield put(updateTodoList(updatedItem));
  } catch (err) {
    yield put(setTodoListError(err));
  }
}

export function* watchUpdateTodoList() {
  yield takeEvery(UPDATE_TODO_LIST_PROCESS, workerUpdateTodoList);
}

//delete todo element
function deleteTodo({ _id }) {
  return axios.delete(`/todos/${_id}`).then(() => _id);
}

function* workerDeleteTodoItem(data) {
  try {
    const deletedItemId = yield call(deleteTodo, data.payload);
    yield put(deleteTodoItem(deletedItemId));
  } catch (err) {
    yield put(setTodoListError(err));
  }
}

export function* watchDeleteTodoItem() {
  yield takeEvery(DELETE_TODO_ITEM_PROCESS, workerDeleteTodoItem);
}
