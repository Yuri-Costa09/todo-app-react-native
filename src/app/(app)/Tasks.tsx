import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList, Alert, ScrollView } from "react-native";
import { useContext, useState, useEffect } from "react";
import { TasksContext } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";

export default function Tasks() {
    const { tasks, addTask, toggleTaskCompletion, deleteTask } = useContext(TasksContext);
    const { logout } = useContext(AuthContext);
    const [newTask, setNewTask] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("Tasks component mounted, tasks count:", tasks.length);
    }, [tasks]);

    const handleAddTask = async (e: any) => {
        e.preventDefault();
        
        setIsLoading(true);
        setError("");

        if (!newTask.trim()) {
            setError("Task description is required");
            setIsLoading(false);
            return;
        }

        try {
            await addTask(newTask);
            setNewTask("");
        } catch (error) {
            setError("Failed to add task");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggleComplete = async (task: any) => {
        try {
            await toggleTaskCompletion(task);
        } catch (error) {
            console.error("Falha ao atualizar tarefa:", error);
            Alert.alert("Erro", "Não foi possível atualizar a tarefa.");
        }
    };

    const handleDeleteTask = async (id: string) => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza que deseja excluir esta tarefa?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", style: "destructive", onPress: async () => {
                    try {
                        await deleteTask(id);
                    } catch (error) {
                        console.error("Falha ao excluir tarefa:", error);
                        Alert.alert("Erro", "Não foi possível excluir a tarefa.");
                    }
                }}
            ]
        );
    };

    return (
        <View className="flex-1 p-4 bg-slate-100">

            <View className="flex-row justify-between items-center">
                <Text className="text-center text-4xl font-bold text-black mt-10 mb-4">Tasks</Text>
                <TouchableOpacity onPress={logout}>
                    <Text className="text-blue-500 text-center text-lg font-semibold">Logout</Text>
                </TouchableOpacity>
            </View>

            {/* TODO: COMPONETIZAR ERROR */}
            {error && (
                <Text className="text-red-500 text-center text-lg font-semibold mb-4">
                    {error}
                </Text>
            )}

            <TextInput
                placeholder="Add a new task"
                value={newTask}
                onChangeText={setNewTask}
                className="w-full p-4 border border-gray-300 rounded-md text-xl shadow-lg mb-7"
            />

            <TouchableOpacity
                onPress={handleAddTask}
                className="w-full p-4 bg-blue-500 rounded-md shadow-lg"
            >
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text className="text-white text-center text-2xl">Add Task</Text>
                )}
            </TouchableOpacity>


            <ScrollView className="flex-1 mt-10">
                {tasks.length === 0 ? (
                    <Text className="text-center text-gray-500 text-lg mt-10">
                        Nenhuma tarefa encontrada
                    </Text>
                ) : (
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View className="flex-row items-center p-4 mb-3 bg-white rounded-lg shadow">
                                {/* Complete Task */}
                                <TouchableOpacity 
                                    onPress={() => handleToggleComplete(item)}
                                    className="mr-3"
                                >
                                    <View className={`w-6 h-6 border-2 rounded ${
                                        item.complete 
                                            ? 'bg-green-500 border-green-500' 
                                            : 'border-gray-400'
                                    }`}>
                                        {item.complete && (
                                            <Text className="text-white text-center">✓</Text>
                                        )}
                                    </View>
                                </TouchableOpacity>
                                
                                <Text className={`flex-1 text-lg ${
                                    item.complete 
                                        ? 'line-through text-gray-500' 
                                        : 'text-black'
                                }`}>
                                    {item.description}
                                </Text>
                                
                                <TouchableOpacity 
                                    onPress={() => handleDeleteTask(item.id)}
                                    className="ml-3"
                                >
                                    <Text className="text-red-500">Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}
            </ScrollView>
        </View>
    )
}