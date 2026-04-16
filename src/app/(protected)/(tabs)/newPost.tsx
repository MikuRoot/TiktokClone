import {useEffect, useRef, useState} from "react";
import {
	Button,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import { CameraView, CameraType, useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import * as Linking from 'expo-linking';
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import { useVideoPlayer, VideoView } from "expo-video";
import * as ImagePicker from 'expo-image-picker';

import CommonStyles from "../../../constants/CommonStyles";
import {LocalColors} from "../../../constants/Colors";

export default function NewPostScreen() {
	const [facing, setFacing] = useState<CameraType>('back')
	const [ isRecording, setIsRecording ] = useState<boolean>(false)
	const [video, setVideo] = useState<string | undefined>(undefined)
	const [caption, setCaption] = useState<string>('')
	const cameraRef = useRef<CameraView>(null)
	const hasRequestedPermissions = useRef<boolean>(false)

	const [permissions, requestPermissions] = useCameraPermissions()
	const [microphonePermissions, requestMicrophonePermissions] = useMicrophonePermissions()

	const insets = useSafeAreaInsets();

	const videoPlayer = useVideoPlayer(null, player => {
		player.loop = true;
	})

	useEffect(() => {
		if (hasRequestedPermissions.current) return;
		(async () => {
			if (permissions && !permissions.granted && permissions.canAskAgain) {
				await requestPermissions()
			}
			if (microphonePermissions && !microphonePermissions.granted && microphonePermissions.canAskAgain) {
				await requestMicrophonePermissions()
			}
			hasRequestedPermissions.current = true;
		})();
	}, [permissions, microphonePermissions]);

	if (!permissions || !microphonePermissions) {
		return <View/>
	}

	if ((permissions && !permissions.granted && !permissions.canAskAgain) || (microphonePermissions && !microphonePermissions.granted && !microphonePermissions.canAskAgain)) {
		return (
			<View style={styles.permissionContainer}>
				<Text style={styles.permissionText}>We need your permission to use the camera and microphone.</Text>
				<Button title={"Grant Permission"} onPress={() => Linking.openSettings()} />
			</View>
		)
	}

	const toggleCamera = () => {
		setFacing(prev => prev === 'back' ? 'front' : 'back')
	}

	const selectFromGallery = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['videos'],
			allowsEditing: true,
			aspect: [9, 16],
		});

		console.log(result);

		if (!result.canceled) {
			const uri = result.assets[0].uri;
			setVideo(uri);
			await videoPlayer.replaceAsync({ uri })
			videoPlayer.play();
		}
	}

	const stopRecording = () => {
		setIsRecording(false)
		cameraRef.current?.stopRecording()
	}

	const startRecording = async () => {
		setIsRecording(true)
		const recordedVideo = await cameraRef.current?.recordAsync()
		if (recordedVideo?.uri) {
			const uri = recordedVideo.uri
			setVideo(uri)
			await videoPlayer.replaceAsync({ uri })
			videoPlayer.play()
		}
	}

	const dismissVideo = () => {
		setVideo(undefined)
		videoPlayer.release()
	}

	const postVideo = async () => {

	}

	const renderCamera = () => {
		return (
			<View style={CommonStyles.f1}>
				<CameraView
					ref={cameraRef}
					style={[CommonStyles.f1]}
					facing={facing}
					mode={"video"}
				/>
				<View style={[styles.topBar, { top: insets.top + 10 }]}>
					<Ionicons name={"close"} size={30} color={"white"} onPress={() => router.back()}/>
				</View>

				<View style={styles.bottomControl}>
					<Ionicons name={"images"} size={30} color={"white"} onPress={selectFromGallery} />

					<TouchableOpacity
						style={[
							styles.recordButton,
						]}
						onPress={isRecording ? stopRecording : startRecording}
					>
						{isRecording && <View style={styles.recordingButton}/>}
					</TouchableOpacity>

					<Ionicons name={"camera-reverse"} size={30} color={"white"} onPress={toggleCamera} />
				</View>
			</View>
		)
	}

	const renderRecordedVideo = () => {
		return (
			<SafeAreaView style={CommonStyles.f1} edges={['bottom']}>
				<Ionicons
					name={"close"}
					size={32}
					color={"white"}
					style={[styles.closeIcon, { top: insets.top + 20 }]}
					onPress={dismissVideo}
				/>

				<View style={styles.videoWrapper}>
					<VideoView
						player={videoPlayer}
						contentFit={"contain"}
						style={styles.video}
					/>
				</View>

				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : undefined}
					style={styles.captionContainer}
					keyboardVerticalOffset={20}
				>
					<TextInput
						value={caption}
						onChangeText={setCaption}
						style={styles.input}
						placeholder={"Add a caption..."}
						placeholderTextColor={"#aaa"}
						multiline={true}
					/>
					<TouchableOpacity
						style={styles.postButton}
						onPress={() => postVideo()}
					>
						<Text style={styles.postText}>
							Post
						</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</SafeAreaView>
		)
	}

	return (
		<View>
			{video ? renderRecordedVideo() : renderCamera()}
		</View>
	);
}

const styles = StyleSheet.create({
	permissionContainer: {
		flex: 1,
		justifyContent: "center",
		padding: 20
	},
	permissionText: {
		color: "white",
		textAlign: "center",
		fontSize: 20,
		fontWeight: '700'
	},
	recordButton: {
		width: 80,
		height: 80,
		backgroundColor: "white",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	recordingButton: {
		width: 70,
		height: 70,
		backgroundColor: LocalColors.brickRed,
		borderRadius: 35,
	},
	topBar: {
		position: "absolute",
		left: 15
	},
	bottomControl: {
		position: "absolute",
		bottom: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
	},
	closeIcon: {
		position: "absolute",
		left: 20,
		zIndex: 1
	},
	video: {
		aspectRatio: 9/16
	},
	input: {
		flex: 1,
		color: "white",
		backgroundColor: "#111",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 10,
		maxHeight: 110
	},
	postText: {
		color: "white",
		fontSize: 17,
		fontWeight: '700'
	},
	postButton: {
		backgroundColor: '#ff0050',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
	},
	videoWrapper: {
		flex: 1,
	},
	captionContainer: {
		paddingHorizontal: 5,
		flexDirection: "row",
		gap: 10,
		marginBottom: 15,
	}
});
