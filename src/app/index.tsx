import { View, Text, TouchableOpacity } from "react-native";
import { useContext, useEffect } from "react";
import "@/global.css";
import { useRouter } from "expo-router";
import { AuthContext } from "../context/AuthContext";

export default function App() {
    const router = useRouter();
    const { token, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (!isLoading && token) {
          router.replace("/(app)/Tasks");
        }
      }, [token, isLoading]);

    const handleRegister = () => {
        router.push("/(auth)/Register");
    };

    const handleLogin = () => {
        router.push("/(auth)/Login");
    };

    const handleGoToTasks = () => {
        router.push("/(app)/Tasks");
    };

    if (isLoading) {
        return (
            <View className="flex-1 items-center justify-center bg-slate-100">
                <Text className="text-blue-1200 text-2xl">Loading...</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 items-center justify-center bg-slate-100">
            <Text className="text-blue-1200 text-4xl font-bold">Todo App</Text>
            <View className="flex-column w-full">

                <TouchableOpacity className=" bg-red-500 p-4 rounded-md m-10 shadow-lg">
                    <Text className="text-2xl text-white text-center font-bold"
                    onPress={handleRegister}>
                        Register</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className=" bg-blue-600 p-4 rounded-md m-10 shadow-lg">
                    <Text className="text-2xl text-white text-center font-bold"
                    onPress={handleLogin}>
                        Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    className={`p-4 rounded-md m-10 shadow-lg ${token ? 'bg-purple-500' : 'bg-gray-400'}`}
                    disabled={!token}
                    onPress={token ? handleGoToTasks : undefined}
                >
                    <Text className="text-2xl text-white text-center font-bold">
                        Go To Tasks</Text>
                </TouchableOpacity>

                {/* Conditional rendering: Show warning message when user is not authenticated */}
                {!token && (
                    <View className="mx-10 mb-4">
                        <Text className="text-red-500 text-center text-lg font-semibold">
                            Sign in or register to access tasks
                        </Text>
                    </View>
                )}

            </View>
        </View>
    );
}