import {Redirect, Stack} from "expo-router";
import {useAuthStore} from "../../stores/useAuthStore";

export default function AuthLayout() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
	if (isAuthenticated) {
		return <Redirect href={"/"}/>
	}

	return (
		<Stack>
			<Stack.Screen name="login" options={{headerShown: false}}/>
			<Stack.Screen name="register" options={{headerShown: false}}/>
		</Stack>
	)
}