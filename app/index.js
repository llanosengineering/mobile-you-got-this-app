import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import ToDoList from "./to-do-list";

const HomeScreen = () => {
  return (
    <View>
      <ToDoList />
      <Link href="/add-task" asChild>
        <Pressable>
          <Text>Add task</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default HomeScreen;
