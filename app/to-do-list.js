import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <View style={localStyles.listItem}>
              <Text>{item.task}</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          renderHiddenItem={(rowData, rowMap) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={localStyles.hiddenEditItem}
                onPress={() => {
                  console.log("Edit:", rowData.item);
                  rowMap[rowData.item.id].closeRow();
                }}
              >
                <Text style={localStyles.hiddenText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={localStyles.hiddenDeleteItem}
                onPress={() => {
                  console.log("Delete:", rowData.item);
                  rowMap[rowData.item.id].closeRow();
                }}
              >
                <Text style={localStyles.hiddenText}>Delete</Text>
              </TouchableOpacity>
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
    padding: 20,
  },
  listItem: {
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  hiddenEditItem: {
    backgroundColor: "#7b68ee",
    flex: 1,
    justifyContent: "center",
    padding: 15,
    marginVertical: 2,
  },
  hiddenDeleteItem: {
    backgroundColor: "#f05d5e",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
    marginVertical: 2,
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
 * - Other option: Make editable
 * - Save deletions and edits
 * - Display error when deletion/edit fails
 */

export default ToDoList;
