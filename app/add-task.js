import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import TodoContext from "./context/TodoContext";
import styles from "./global/styles";

const AddTask = () => {
  const { todosList, setTodosList } = useContext(TodoContext);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskItem = () => {
    if (newTask.trim() !== "")
      setTodosList([...todosList, { task: newTask, isComplete: false }]);
    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>GOALS</Text>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={localStyles.inputContainer}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TextInput
              style={localStyles.input}
              onChangeText={setNewTask}
              value={newTask}
              placeholder="What needs to be done?"
              placeholderTextColor="#999"
            />
            <Pressable
              disabled={!newTask.length}
              style={!newTask.length ? styles.disabledBtn : styles.button}
              onPress={handleNewTaskItem}
            >
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

const localStyles = StyleSheet.create({
  inputContainer: { paddingTop: 10 },
  input: {
    height: 40,
    width: 220,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "white",
  },
});

/**
 * TO DO: AddTask
 *
 * - Save additions
 * - Display error when save fails
 * - Display success when save is successful
 */

export default AddTask;
