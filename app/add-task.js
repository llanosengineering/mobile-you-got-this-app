import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./global/styles";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(FIRESTORE_DB, "toDoList"), {
        title: newTask,
        completed: false,
      });
      setNewTask("");
      console.log("Task document saved to DB: ", docRef.id);
    } catch (e) {
      console.error("Error adding task document: ", e);
    }
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
              onChangeText={(task) => setNewTask(task)}
              value={newTask}
              placeholder="What needs to be done?"
              placeholderTextColor="#999"
            />
            <Pressable
              disabled={!newTask.length}
              style={!newTask.length ? styles.disabledBtn : styles.button}
              onPress={addTodo}
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
 * - Display error when save fails
 * - Display success when save is successful
 */

export default AddTask;
