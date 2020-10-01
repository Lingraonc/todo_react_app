import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoItemProcess,
  updateTodoListProcess,
} from "../../store/todo-page/actions";

const TodoButtons = (props) => {
  const { isCompleted, isImportant, createFormShow, _id } = props;
  const dispatch = useDispatch();

  const changeParams = (params) => {
    dispatch(updateTodoListProcess(params));
  };

  const deleteElement = (params) => {
    dispatch(deleteTodoItemProcess(params));
  };

  let importantButtonClasses = "btn btn-primary ml-1 mr-1 list-button";

  importantButtonClasses = isImportant
    ? importantButtonClasses + " active"
    : importantButtonClasses;

  let successButtonClasses = "btn btn-info ml-1 mr-1 list-button";

  successButtonClasses = isCompleted
    ? successButtonClasses + " active"
    : successButtonClasses;

  const editButton = (
    <button
      className="btn btn-secondary ml-1 mr-1"
      onClick={() => {
        createFormShow(false);
        props.editElement(_id);
      }}
    >
      Edit
    </button>
  );
  const markImportant = (
    <button
      className={importantButtonClasses}
      onClick={() => {
        changeParams({
          _id,
          isImportant: !isImportant,
        });
      }}
    >
      Important
    </button>
  );
  const deleteButton = (
    <button
      className="btn btn-danger ml-1 mr-1"
      onClick={() => {
        deleteElement({ _id });
      }}
    >
      Delete
    </button>
  );
  const markSuccessButton = (
    <button
      className={successButtonClasses}
      onClick={() => {
        changeParams({
          _id,
          isCompleted: !isCompleted,
        });
      }}
    >
      Successed
    </button>
  );

  return (
    <span className="text-right">
      {editButton}
      {markImportant}
      {deleteButton}
      {markSuccessButton}
    </span>
  );
};

export default TodoButtons;
