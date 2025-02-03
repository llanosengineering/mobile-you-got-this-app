import React, { useContext, useEffect } from "react";
import { Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./global/styles";
import TodoContext from "./context/TodoContext";

const AddTask = () => {
  const { handleSaveEdit, isEditing, newTask, setNewTask } =
    useContext(TodoContext);

  useEffect(() => {
    if (isEditing && newTask) {
      setNewTask(newTask);
    }
  }, [isEditing, newTask]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>What needs to be done?</Text>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={localStyles.inputContainer}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TextInput
              style={localStyles.input}
              onChangeText={(task) => setNewTask(task)}
              value={newTask}
              placeholder="Ex: Laundry"
              placeholderTextColor="#999"
            />
            <Pressable
              disabled={!newTask.length}
              style={!newTask.length ? styles.disabledBtn : styles.button}
              onPress={handleSaveEdit}
            >
              <Text style={styles.buttonText}>
                {isEditing ? "SAVE" : "ADD"}
              </Text>
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

export default AddTask;
