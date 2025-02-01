import React, { createContext, useState } from "react";
const TodoContext = createContext({
  todosList: [],
  setTodosList: () => {},
});

export default TodoContext;
