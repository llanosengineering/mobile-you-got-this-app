import React, { useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";

const TodoProvider = ({ children }) => {
  const router = useRouter();
  const { id, title } = useSearchParams();
  const [todosList, setTodosList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Add new tasks to toDoList array as they are added
  useEffect(() => {
    const toDoListRef = collection(FIRESTORE_DB, "toDoList");

    const subscriber = onSnapshot(
      toDoListRef,
      query(toDoListRef, orderBy("timestamp", "asc")),
      {
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
      }
    );

    return () => subscriber();
  }, []);

  // Populate input with task to be edited
  useEffect(() => {
    if (title) {
      setIsEditing(true);
      setNewTask(title);
    }
  }, [title, isEditing]);

  // Handle add task
  const addTodo = async () => {
    try {
      await addDoc(collection(FIRESTORE_DB, "toDoList"), {
        title: newTask,
        completed: false,
        timestamp: new Date(),
      });
      setNewTask("");
    } catch (e) {
      alert("An error occurred. Please try again.");
    }
  };

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
  const handleEditTodo = (task) => {
    setIsEditing(true);
    setEditingTaskId(task.id);
    setNewTask(task.title);
    router.push({
      pathname: "/add-task",
      params: { id: task.id, title: task.title },
    });
  };

  // Handle add a new task and editing an existing task
  const handleSaveEdit = async () => {
    try {
      if (isEditing && newTask) {
        setIsEditing(true);
        const taskRef = doc(FIRESTORE_DB, "toDoList", editingTaskId);
        await updateDoc(taskRef, { title: newTask });
      } else {
        addTodo();
      }
      setNewTask("");
      setEditingTaskId(null);
      router.push("/");
    } catch (e) {
      alert("Could not save your changes. Please try again.");
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todosList,
        setTodosList,
        handleDeleteTodo,
        handleEditTodo,
        handleSaveEdit,
        newTask,
        setNewTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
