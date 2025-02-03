import React, { createContext } from "react";
const TodoContext = createContext({
  todosList: [],
  setTodosList: () => {},
  handleDeleteTodo: () => {},
  handleEditTodo: () => {},
  handleSaveEdit: () => {},
  newTask: "",
  setNewTask: () => {},
});

export default TodoContext;
