import React, { useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoProvider = ({ children }) => {
  const [todosList, setTodosList] = useState([]);

  return (
    <TodoContext.Provider value={{ todosList, setTodosList }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
