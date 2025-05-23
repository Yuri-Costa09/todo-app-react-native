import { Stack } from "expo-router";
import { useContext, useEffect } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthContext";
import { TasksProvider } from "../../context/TaskContext";
import { View, Text } from "react-native";

export default function AppLayout() {
  const { token, isLoading } = useContext(AuthContext);
  const router = useRouter();

  // redirects if not authenticated
  useEffect(() => {
    if (!isLoading && !token) {
      router.replace("/(auth)/Login");
    }
  }, [token, isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TasksProvider>
      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: '#ffffff' }
      }}>
        <Stack.Screen name="Tasks" />
        {/* Adicione outras telas autenticadas aqui */}
      </Stack>
    </TasksProvider>
  );
}
