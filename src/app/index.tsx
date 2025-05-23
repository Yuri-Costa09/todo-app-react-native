import { View, Text, TouchableOpacity } from "react-native";
import "@/global.css";
import { useRouter } from "expo-router";

//! TODO: USAR FUNCAO DO AUTHCONTEXT "ISAUTHENTICATED" PARA DESABILITAR O BOTAO "GOTOTASKS"

export default function App() {

    const router = useRouter();

    const handleRegister = () => {
        router.push("/Register"); // Navega para a rota /register
      };
    
      const handleLogin = () => {
        router.push("/Login"); // Navega para a rota /login
      };
    
      const handleGoToTasks = () => {
        router.push("/Tasks"); // Navega para a rota /tasks
      };

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

            <TouchableOpacity className=" bg-purple-500 p-4 rounded-md m-10 shadow-lg">
                <Text className="text-2xl text-white text-center font-bold"
                onPress={handleGoToTasks}>
                    Go To Tasks</Text>
            </TouchableOpacity>

        </View>
        </View>
    );
}