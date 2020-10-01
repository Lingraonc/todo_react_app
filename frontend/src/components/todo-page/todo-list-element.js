import React from "react";

const TodoListElement = (props) => {
  const { isCompleted, isImportant, text } = props;
  let classes = "todo-list-element";
  classes = isImportant ? classes + " important" : classes;
  classes = isCompleted ? classes + " success" : classes;
  return <span className={classes}>{text}</span>;
};

export default TodoListElement;
