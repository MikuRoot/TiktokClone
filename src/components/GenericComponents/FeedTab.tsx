import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

type FeedTabProps = {
	title: string;
	setActive: (title: string) => void;
  activeTab: string;
}

export default function FeedTab(props: FeedTabProps) {
	const { title, setActive, activeTab } = props;

    return (
      <TouchableOpacity
	      style={styles.tabContainer}
	      onPress={() => setActive(title)}
      >
          <Text
	          style={[
							styles.tabText,
		          activeTab === title && styles.activeTabText
	          ]}
          >
	          {title}
					</Text>

	      {activeTab === title && <View style={styles.activeLine}/>}
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	tabContainer: {

	},
	tabText: {
		color: 'grey',
		fontSize: 17,
		fontWeight: "bold"
	},
	activeTabText: {
		color: 'white',
	},
	activeLine: {
		width: 20,
		height: 2,
		backgroundColor: 'white',
		marginTop: 4
	}
})