import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_LIST,
  TODO_LIST_ERROR,
  CLEAR_TODO_LIST,
  GET_TODO_LIST,
  TODO_LIST_LOADING,
  TODO_CLEAR_ERRORS,
} from "../types";

const defaultState = {
  items: null,
  isLoading: false,
  errors: null,
  searchedId: null,
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        errors: null,
      };

    case UPDATE_TODO_LIST:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        errors: null,
      };

    case DELETE_TODO_ITEM:
      return {
        ...state,
        items: state.items.filter((items) => items._id !== action.payload),
        errors: null,
      };

    case CLEAR_TODO_LIST:
      return {
        ...state,
        ...state.cardsInfo,
        items: null,
        isLoading: false,
      };

    case GET_TODO_LIST:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };

    case TODO_LIST_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case TODO_LIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case TODO_CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
};
