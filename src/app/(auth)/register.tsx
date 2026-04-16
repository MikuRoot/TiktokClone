import {useState} from "react";
import {View, Text, Alert, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";
import {useAuthStore} from "../../stores/useAuthStore";
import {Ionicons} from "@expo/vector-icons";
import {Link} from "expo-router";
import CommonStyles from "../../constants/CommonStyles";

export default function Register() {
	const [email, setEmail] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showingPassword, setShowingPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const register = useAuthStore((state) => state.register)

	const handleRegister = async () => {
		if (!email || !password) {
			Alert.alert("Error", "Please fill in all fields")
			return;
		}

		try {
			setLoading(true);
			await register(email, password, username);
		} catch (error) {
			console.log(error);
			Alert.alert("Error", "Register failed. Please try again.")
		} finally {
			setLoading(false);
		}
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			style={styles.container}
			keyboardVerticalOffset={20}
		>
			<Text style={styles.title}>Create account!</Text>
			<Text style={styles.subTitle}>Sign up to get started</Text>

			<TextInput
				style={[styles.input, styles.inputBorder, CommonStyles.mrgn_bottom_15]}
				placeholder={"Username"}
				placeholderTextColor={"#666"}
				value={username}
				onChangeText={setUsername}
				autoCapitalize={"none"}
			/>

			<TextInput
				style={[styles.input, styles.inputBorder, CommonStyles.mrgn_bottom_15]}
				placeholder={"Email"}
				placeholderTextColor={"#666"}
				value={email}
				onChangeText={setEmail}
				keyboardType={"email-address"}
				autoCapitalize={"none"}
			/>

			<View style={[styles.passwordFieldContainer, CommonStyles.mrgn_bottom_15,]}>
				<TextInput
					style={[styles.input, CommonStyles.f1]}
					placeholder={"Password"}
					placeholderTextColor={"#666"}
					value={password}
					onChangeText={setPassword}
					secureTextEntry={!showingPassword}
					autoCapitalize={"none"}
				/>

				<Ionicons name={!showingPassword ? "eye-off" : "eye"} size={24} color={"#666"} onPress={() => setShowingPassword(prev => !prev)}/>
			</View>

			<TouchableOpacity style={styles.signInButton} onPress={handleRegister} disabled={loading}>
				<Text style={styles.signInButtonText}>
					{loading ? 'Creating account...' : 'Create account'}
				</Text>
			</TouchableOpacity>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					Already have an account?{" "}
				</Text>
				<Link href={"/login"}>
					<Text style={styles.linkText}>
						Sign in
					</Text>
				</Link>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 25,
		backgroundColor: "#121212",
	},
	title: {
		color: "white",
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 5
	},
	subTitle: {
		color: "#999",
		fontSize: 16,
		textAlign: "center",
		marginBottom: 45
	},
	input: {
		padding: 15,
		fontSize: 16,
		color: "white",
	},
	inputBorder: {
		borderWidth: 1,
		borderColor: "#333",
		borderRadius: 10,
	},
	passwordFieldContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingRight: 15,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#333",
	},
	signInButton: {
		backgroundColor: "#ff0050",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 5,
	},
	signInButtonText: {
		color: "white",
		fontSize: 17,
		fontWeight: "600"
	},
	footer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 25
	},
	footerText: {
		color: "#999",
		fontSize: 15
	},
	linkText: {
		color: "white",
		fontWeight: "500",
		fontSize: 15,
	}
})