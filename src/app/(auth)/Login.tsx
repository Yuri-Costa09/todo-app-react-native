import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { login } = useContext(AuthContext);

    const handleRegister = async () => {
        setIsLoading(true);
        setError("");

        if (!email || !password) {
            setError("All fields are required");
            setIsLoading(false);
            return;
        }

        try {
            await login(email, password);
            router.replace("/(app)/Tasks");
        } catch (error) {
            setError("Login failed");
            console.log(error);
            setIsLoading(false);
            return;
        }
    }
    return (
        <View className="flex-1 items-center justify-center bg-slate-100">
            <Text className="text-4xl text-black font-bold">Login</Text>

            {/* TODO: COMPONETIZAR ERROR */}
            {error && (
                <Text className="text-red-500 text-center text-lg font-semibold">
                    {error}
                </Text>
            )}

            {/* TODO: COMPONETIZAR INPUT */}
            <View className="w-full p-5 gap-10 mt-4">
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg"
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg"
                />

                <TouchableOpacity
                    onPress={handleRegister}
                    className="w-full p-4 bg-blue-500 rounded-md shadow-md"
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text className="text-white text-center text-2xl">Login</Text>
                    )}
                </TouchableOpacity>
            </View>

        </View>
    )
}

