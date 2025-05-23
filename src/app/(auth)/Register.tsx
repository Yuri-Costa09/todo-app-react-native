import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { register } = useContext(AuthContext);

    const handleRegister = async () => {
        setIsLoading(true);
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required");
            setIsLoading(false);
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address with '@'");
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            await register(name, email, password);
            router.replace("/(auth)/Login");

        } catch (error) {
            setError("Registration failed");
            console.log(error);
            setIsLoading(false);
        }
    }
    return (
        <View className="flex-1 items-center justify-center bg-slate-100">
                

            <Text className="text-4xl text-black font-bold">Register</Text>

            {error && (
                <Text className="text-red-500 text-center text-lg font-semibold mt-4">
                    {error}
                </Text>
            )}

            <View className="w-full p-5 gap-10 mt-4">
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg"
                />

                <TextInput
                    placeholder="Email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg"
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg"
                />

                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg"
                />

                <TouchableOpacity
                    onPress={handleRegister}
                    className="w-full p-4 bg-blue-500 rounded-md shadow-md"
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text className="text-white text-center text-2xl">Register</Text>
                    )}
                </TouchableOpacity>
            </View>

        </View>
    )
}

