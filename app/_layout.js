import { Stack } from "expo-router";

const RootLayout = () => {

    return (

    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="index" />
    <Stack.Screen name="add-task" />
  </Stack>
    )
}

export default RootLayout