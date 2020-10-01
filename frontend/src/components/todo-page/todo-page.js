import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./todo-list";
import PageTitle from "../pages-titles/default-page-title";
import "../../styles/todo-page/style.css";
import {
  addTodoItemProcess,
  getTodoListProcess,
  todoClearErrors,
  updateTodoListProcess,
} from "../../store/todo-page/actions";
import { defaultPreloader } from "../preloaders/preloader";
import TodoForm from "./todo-form";
import { ErrorAlert } from "../alerts/alert";

const TodoPage = () => {
  const [editedId, editElement] = useState(null);
  const [createForm, createFormShow] = useState(false);
  const data_array = useSelector((state) => state.todo.items);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const errors = useSelector((state) => state.todo.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoListProcess());
  }, [dispatch]);

  const clearErrors = () => {
    dispatch(todoClearErrors());
  };

  const submit = (values) => {
    editElement(null);
    createFormShow(false);
    if (values.hasOwnProperty("_id")) {
      dispatch(updateTodoListProcess(values));
    } else {
      dispatch(addTodoItemProcess(values));
    }
  };

  return (
    <div className="container">
      <PageTitle pageTitle="Todo list" />
      {errors !== null ? (
        <ErrorAlert text={errors} clearErrors={clearErrors} />
      ) : (
        ""
      )}
      {isLoading ? (
        defaultPreloader
      ) : (
        <TodoList
          editedId={editedId}
          editElement={editElement}
          data_array={data_array}
          createFormShow={createFormShow}
          submit={submit}
        />
      )}
      {createForm ? (
        <TodoForm onSubmit={submit} buttonLabel="Save" />
      ) : (
        <button
          className="btn btn-secondary"
          onClick={() => {
            editElement(null);
            createFormShow(true);
          }}
        >
          Add new
        </button>
      )}
    </div>
  );
};

export default TodoPage;
