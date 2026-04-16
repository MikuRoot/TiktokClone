import {Redirect, Stack} from "expo-router";
import {useAuthStore} from "../../stores/useAuthStore";

export default function ProtectedLayout() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
	const hydrated = useAuthStore((state) => state.hydrated)

	if (!hydrated) return null
	if (!isAuthenticated) {
		return <Redirect href={"/login"}/>
	}

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{headerShown: false}}/>
		</Stack>
	)
}