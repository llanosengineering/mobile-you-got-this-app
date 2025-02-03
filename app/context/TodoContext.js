import React, { createContext } from "react";
const TodoContext = createContext({
  todosList: [],
  setTodosList: () => {},
  handleDeleteToDo: () => {},
  handleEditToDo: () => {},
});

export default TodoContext;
