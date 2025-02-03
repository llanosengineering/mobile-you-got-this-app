import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import TodoContext from "./context/TodoContext";

const ToDoList = ({ todosList }) => {
  const { handleDeleteTodo, handleEditTodo } = useContext(TodoContext);
  useEffect(() => {}, [todosList]);

  return (
    <View style={localStyles.listWrapper}>
      <SwipeListView
        data={todosList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={localStyles.listItem}>
            <Text>{item.title}</Text>
          </View>
        )}
        leftOpenValue={95}
        rightOpenValue={-95}
        renderHiddenItem={(rowData, rowMap) => (
          <View style={localStyles.hiddenContainer}>
            <TouchableOpacity
              style={localStyles.hiddenEditItem}
              onPress={() => {
                handleEditTodo(rowData.item);
                rowMap[rowData.item.id]?.closeRow();
              }}
            >
              <Text style={localStyles.hiddenText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={localStyles.hiddenDeleteItem}
              onPress={async () => {
                handleDeleteTodo(rowData.item);
                rowMap[rowData.item.id]?.closeRow();
              }}
            >
              <Text style={localStyles.hiddenText}>REMOVE</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    borderColor: "red",
    borderRadius: 10,
    marginVertical: 8,
    overflow: "hidden",
  },
  hiddenContainer: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  hiddenEditItem: {
    backgroundColor: "#7b68ee",
    flex: 1,
    justifyContent: "center",
    padding: 15,
    marginVertical: 1,
    borderRadius: 10,
  },
  hiddenDeleteItem: {
    backgroundColor: "#f05d5e",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
    marginVertical: 1,
    borderRadius: 10,
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

export default ToDoList;
