import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_LIST,
  TODO_LIST_ERROR,
  CLEAR_TODO_LIST,
  GET_TODO_LIST,
  TODO_LIST_LOADING,
  ADD_TODO_ITEM_PROCESS,
  UPDATE_TODO_LIST_PROCESS,
  GET_TODO_LIST_PROCESS,
  DELETE_TODO_ITEM_PROCESS,
  TODO_CLEAR_ERRORS,
} from "../types";

export const clearTodoList = () => ({
  type: CLEAR_TODO_LIST,
});

export const setTodoListLoading = (isLoading) => {
  return {
    type: TODO_LIST_LOADING,
    payload: isLoading,
  };
};

export const getTodoList = (data) => {
  return {
    type: GET_TODO_LIST,
    payload: data,
  };
};

export const getTodoListProcess = () => {
  return {
    type: GET_TODO_LIST_PROCESS,
  };
};

export const setTodoListError = (error) => {
  return {
    type: TODO_LIST_ERROR,
    payload: error.message,
  };
};

export const addTodoItemProcess = (data) => {
  return {
    type: ADD_TODO_ITEM_PROCESS,
    payload: data,
  };
};

export const addTodoItem = (data) => {
  return {
    type: ADD_TODO_ITEM,
    payload: data,
  };
};

export const updateTodoListProcess = (data) => {
  return {
    type: UPDATE_TODO_LIST_PROCESS,
    payload: data,
  };
};

export const updateTodoList = (data) => {
  return {
    type: UPDATE_TODO_LIST,
    payload: data,
  };
};

export const deleteTodoItemProcess = (data) => {
  return {
    type: DELETE_TODO_ITEM_PROCESS,
    payload: data,
  };
};

export const deleteTodoItem = (data) => {
  return {
    type: DELETE_TODO_ITEM,
    payload: data,
  };
};

export const todoClearErrors = () => {
  return {
    type: TODO_CLEAR_ERRORS,
  };
};
