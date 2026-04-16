import {Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {useAuthStore} from "../../stores/useAuthStore";
import CommonStyles from "../../constants/CommonStyles";

export default function Login() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showingPassword, setShowingPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const login = useAuthStore((state) => state.login)

	const handleLogin = async () => {
		if (!email || !password) {
			Alert.alert("Error", "Please fill in all fields")
			return;
		}

		try {
			setLoading(true);
			await login(email, password);
		} catch (error) {
			console.log(error);
			Alert.alert("Error", "Please fill in all fields")
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
			<Text style={styles.title}>Welcome back!</Text>
			<Text style={styles.subTitle}>Sign in to your account</Text>

			<TextInput
				style={[styles.input, styles.inputBorder, CommonStyles.mrgn_bottom_15]}
				placeholder={"Email"}
				placeholderTextColor={"#666"}
				value={email}
				onChangeText={setEmail}
				keyboardType={"email-address"}
				autoCapitalize={"none"}
			/>

			<View style={[styles.passwordFieldContainer, CommonStyles.mrgn_bottom_15]}>
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

			<TouchableOpacity style={styles.signInButton} onPress={handleLogin} disabled={loading}>
				<Text style={styles.signInButtonText}>
					{loading ? 'Signing in...' : 'Sign in'}
				</Text>
			</TouchableOpacity>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					Don't have an account?{" "}
				</Text>
				<Link href={"/register"}>
					<Text style={styles.linkText}>
						Sign up
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