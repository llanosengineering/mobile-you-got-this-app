import React, { useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const TodoProvider = ({ children }) => {
  const [todosList, setTodosList] = useState([]);
  // Add new tasks to toDoList array as they are added
  useEffect(() => {
    const toDoListRef = collection(FIRESTORE_DB, "toDoList");

    const subscriber = onSnapshot(toDoListRef, {
      next: (snapshot) => {
        const todos = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTodosList(todos);
      },
    });

    return () => subscriber();
  }, []);

  // Handle deleting tasks
  const handleDeleteTodo = async (item) => {
    if (!item?.id) return;
    const ref = doc(FIRESTORE_DB, "toDoList", item.id);
    try {
      deleteDoc(ref);
    } catch (e) {
      alert("Failed to delete task. Please try again");
    }
  };

  // Handle editing a task
  const handleEditTodo = async (item) => {
    console.log("item", item.title);
  };

  return (
    <TodoContext.Provider
      value={{ todosList, setTodosList, handleDeleteTodo, handleEditTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// TODO: Provider
// Handle editing a task
// Option to mark as complete

export default TodoProvider;
