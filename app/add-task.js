import React, { useContext, useState } from "react";
import TodoContext from "./context/TodoContext";
import { Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const AddTask = () => {
  const { todosList, setTodosList } = useContext(TodoContext);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskItem = (event) => {
    if (newTask.trim() !== "")
      setTodosList([...todosList, { task: newTask, isComplete: false }]);
    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>GOALS</Text>
      </View>

      <SafeAreaProvider>
        <SafeAreaView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setNewTask}
            value={newTask}
            placeholder="What needs to be done?"
            placeholderTextColor="#999"
          />
          <Pressable
            disabled={!newTask.length}
            style={!newTask.length ? styles.disabledBtn : styles.button}
            onPress={(event) => handleNewTaskItem(event.target.value)}
          >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
  },
  header: {
    textAlign: "center",
    paddingTop: "4%",
    color: "#fa8072",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 6,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 265,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#6a5acd",
    padding: 12,
    borderRadius: 40,
  },
  disabledBtn: {
    backgroundColor: "#BFB8E9",
    padding: 12,
    borderRadius: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddTask;
