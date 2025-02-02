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
    console.log(todosList);
    return () => subscriber();
  }, []);

  // Fetch toDoList collection
  // const fetchData = ({item}) => {
  //   const todoRef = doc(FIRESTORE_DB, `toDoList/${item.id}`)

  // }

  // Handle deleting tasks

  // Handle editing a task

  return (
    <TodoContext.Provider value={{ todosList, setTodosList }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
