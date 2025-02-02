import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const ToDoList = ({ todosList }) => {
  useEffect(() => {
    console.log("ToDoList.js + todosList ==>", todosList);
  }, [todosList]);

  return (
    <View style={localStyles.listWrapper}>
      {todosList.length > 0 ? (
        <SwipeListView
          data={todosList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={localStyles.listItem}>
              <Text>{item.task}</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          renderHiddenItem={() => (
            <View style={localStyles.hiddenItem}>
              <Text style={localStyles.hiddenText}>Delete</Text>
            </View>
          )}
        />
      ) : (
        <Text style={localStyles.emptyText}>No tasks yet!</Text>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
  listItem: {
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  hiddenItem: {
    backgroundColor: "#f05d5e",
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },
  hiddenText: {
    color: "white",
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 10,
  },
});

/**
 * TO DO: ToDoList
 *
 * - Add styling to No Tasks Yet! message
 * - Add padding to list margins
 * - Other option: Make editable / Edit option should have its own color
 * - Save deletions and edits
 * - Display error when deletion/edit fails
 */

export default ToDoList;
