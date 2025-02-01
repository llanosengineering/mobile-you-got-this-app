import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ToDoList = ({ styles, todosList }) => {
  useEffect(() => {
    console.log("ToDoList.js + todosList ==>", todosList);
  }, [todosList]);

  return (
    <View>
      <View>
        <Text style={styles.header}>YOU GOT THIS</Text>
      </View>
      <View>
        {todosList.map((task, index) => (
          <Text>{task.task}</Text>
          // TODO: Idea => implement react-native-swipe-list-view
        ))}
      </View>
    </View>

    // TODO:
    // If tasks array is populated, show ToDoList
    // If empty, show empty message
  );
};

export default ToDoList;
