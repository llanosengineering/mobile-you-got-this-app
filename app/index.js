import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import ToDoList from "./to-do-list";
import TodoContext from "./context/TodoContext";
import styles from "./global/styles";

const HomeScreen = () => {
  const { todosList } = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>YOU GOT THIS</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.subHeader}>{`You have (${
          todosList.length + 1
        }) outstanding tasks.`}</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text>Swipe to edit or remove a task.</Text>
      </View>
      <View style={styles.contentContainer}>
        <ToDoList styles={styles} todosList={todosList} />
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/add-task" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>ADD TASK</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default HomeScreen;
