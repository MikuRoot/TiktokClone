import {StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";

import {useAuthStore} from "../../../stores/useAuthStore";

export default function ProfileScreen() {
	const user = useAuthStore((state) => state.user)
	const logout = useAuthStore((state) => state.logout)
	const [loading, setLoading] = useState<boolean>(false)

	const handleLogout = async () => {
		try {
			await logout()
		} catch (error) {
			setLoading(false)
			console.error(error )
		}
	}

	const onLogoutPressed = async () => {
		Alert.alert(
			"Logout",
			"Are you sure you want to logout?",
			[
				{
					text: "Cancel",
					style: "cancel"
				},
				{
					text: "Logout",
					style: "destructive",
					onPress: handleLogout
				}
			]
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Profile</Text>
			<View style={styles.userInfo}>
				<View style={styles.avatarContainer}>
					<Text style={styles.avatarText}>{user?.email.charAt(0).toUpperCase()}</Text>
				</View>

				<View>
					<Text style={styles.username}>{user?.username ?? ""}</Text>
					<Text style={styles.email}>{user?.email ?? ""}</Text>
				</View>
			</View>

			<TouchableOpacity style={styles.logoutButton} onPress={onLogoutPressed} disabled={loading}>
				{loading ? (
					<ActivityIndicator size={'small'} color={'white'}/>
				) : (
					<Text style={styles.logoutText}>Logout</Text>
				)}
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		padding: 20,
		gap: 40
	},
	title: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	userInfo: {
		alignItems: 'center',
		gap: 15
	},
	avatarContainer: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	avatarText: {
		color: "black",
		fontSize: 40,
		fontWeight: "bold",
	},
	username: {
		color: "white",
		fontSize: 25,
		textAlign: "center",
	},
	email: {
		color: "#999",
		fontSize: 16,
	},
	logoutText: {
		color: "white",
		fontSize: 20,
		fontWeight: "600",
		textAlign: "center"
	},
	logoutButton: {
		backgroundColor: "#ff0050",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});
