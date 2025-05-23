import { Stack } from "expo-router";
import { useContext, useEffect } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/AuthContext";

export default function AuthLayout() {
  const { token, isLoading } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="Login" />
      <Stack.Screen name="Register" />
    </Stack>
  );
}
