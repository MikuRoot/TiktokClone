import {Redirect, Stack} from "expo-router";
import {useAuthStore} from "../../stores/useAuthStore";

export default function ProtectedLayout() {
	const isAuthnticated = useAuthStore((state) => state.isAuthenticated)
	if (!isAuthnticated) {
		return <Redirect href={"/login"}/>
	}

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{headerShown: false}}/>
		</Stack>
	)
}