import React from "react";

import TodoButtons from "./todo-buttons";
import TodoListElement from "./todo-list-element";
import TodoForm from "./todo-form";

const TodoList = (props) => {
  const { data_array, editedId, editElement, createFormShow, submit } = props;

  const todoListItems =
    data_array !== null && data_array.length > 0
      ? data_array.map((todo_item) => {
          const { _id } = todo_item;

          return (
            <li className="list-group-item bg-dark border-secondary" key={_id}>
              {editedId === _id ? (
                <span>
                  <TodoForm
                    initialValues={todo_item}
                    form={`todo-` + _id}
                    onSubmit={submit}
                    buttonLabel="Save"
                  />
                </span>
              ) : (
                <span className="d-flex justify-content-between align-items-center">
                  <TodoListElement {...todo_item} />
                  <TodoButtons
                    {...todo_item}
                    editElement={editElement}
                    createFormShow={createFormShow}
                  />
                </span>
              )}
            </li>
          );
        })
      : null;

  return <ul className="todo-list list-group mb-2">{todoListItems}</ul>;
};

export default TodoList;
