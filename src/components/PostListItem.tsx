import { useCallback } from "react";
import {useFocusEffect} from "expo-router";
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { Ionicons } from '@expo/vector-icons';

import {Post} from "../types/types";

type VideoItemProps = {
	postItem: Post;
	isActive: boolean;
}

export default function PostListItem(props: VideoItemProps) {
	const { postItem, isActive } = props;
	const { height, width } = Dimensions.get("window");
	const insets = useSafeAreaInsets();
	const { video_url, nrOfComments, nrOfLikes, nrOfShares, description, user } = postItem;

	const player = useVideoPlayer(video_url, player => {
		player.loop = true;
	});

	useFocusEffect(
		useCallback(() => {
			if (!player) return;
			try {
				if (isActive) {
					player.play()
				}
			} catch (error) {
				console.log(error);
			}

			return () => {
				try {
					if (player && isActive) {
						player.pause()
					}
				} catch (error) {
					console.log(error);
				}
			}
		}, [isActive, player])
	)

	const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing })

	return (
		<View
			style={[{
				height: height - insets.bottom,
				width}]}
		>
			<VideoView
				style={[
					{
						flex: 1
					}
				]}
				player={player}
				contentFit={"contain"}
				nativeControls={false}
			/>

			{/*interaction bar*/}
			<View style={[styles.interactionBar, { bottom: insets.bottom + 40 }]}>
				<TouchableOpacity style={styles.interactionBarItem}>
					<Ionicons name={"heart"} size={33} color={"white"}/>
					<Text style={styles.interactionBarItemText}>{nrOfLikes[0]?.count ?? 0}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.interactionBarItem}>
					<Ionicons name={"chatbubble"} size={30} color={"white"}/>
					<Text style={styles.interactionBarItemText}>{nrOfComments[0]?.count ?? 0}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.interactionBarItem}>
					<Ionicons name={"arrow-redo"} size={30} color={"white"}/>
					<Text style={styles.interactionBarItemText}>{nrOfShares[0]?.count ?? 0}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.avatar}>
					<Text style={styles.avatarText}>{user?.username.charAt(0).toUpperCase() ?? "I"}</Text>
				</TouchableOpacity>
			</View>

			{/*video info*/}
			<View style={[styles.videoInfo, { bottom: insets.bottom + 40 }]}>
				<Text style={styles.usernameText}>{user?.username ?? "I"}</Text>
				<Text style={styles.descriptionText}>{description ?? ""}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	interactionBar: {
		position: "absolute",
		right: 20,
		alignItems: "center",
		gap: 25
	},
	interactionBarItem: {
		alignItems: "center",
		gap: 5
	},
	interactionBarItemText: {
		color: "white",
		fontSize: 12,
		fontWeight: '600'
	},
	avatar: {
		width: 35,
		height: 35,
		backgroundColor: "white",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center"
	},
	avatarText: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	videoInfo: {
		position: "absolute",
		left: 20,
		right: 100,
		gap: 5
	},
	usernameText: {
		color: "white",
		fontSize: 16,
		fontWeight: '600'
	},
	descriptionText: {
		color: "white",
	}
});
