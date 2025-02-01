import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ToDoList from "./to-do-list";
import TodoContext from "./context/TodoContext";

const HomeScreen = () => {
  const { todosList } = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <View>
        <ToDoList styles={styles} todosList={todosList} />
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/add-task" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add Task</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

// TODO: Create global styles to minimize repeated style objs

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6a5acd",
    padding: 12,
    borderRadius: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
  },
  header: {
    alignItems: "center",
    textAlign: "center",
    paddingTop: "4%",
    color: "#fa8072",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 6,
  },
});

export default HomeScreen;
