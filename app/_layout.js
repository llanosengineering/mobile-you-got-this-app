import React from "react";
import TodoProvider from "./providers/TodoProvider";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="add-task" />
      </Stack>
    </TodoProvider>
  );
};

export default RootLayout;
