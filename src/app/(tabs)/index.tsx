import {useRef, useState} from "react";
import { StyleSheet, FlatList, View, Dimensions, ViewToken } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons} from "@expo/vector-icons";

import PostListItem from "../../components/PostListItem";
import posts from '@assets/data/posts.json'
import FeedTab from "../../components/GenericComponents/FeedTab";

const TABS = {
  EXPLORE: 'Explore',
  FOLLOWING: 'Following',
  FOR_YOU: 'For You'
}

export default function Page() {
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS.FOR_YOU);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0]?.index || 0)
    }
  })

  return (
    <View style={styles.container}>
      <View style={[styles.topBar, { top: insets.top + 40 }]}>
        <MaterialIcons name={"live-tv"} size={24} color={"white"}/>
        <View style={styles.navigationBar}>
          <FeedTab title={TABS.EXPLORE} setActive={setActiveTab} activeTab={activeTab} />
          <FeedTab title={TABS.FOLLOWING} setActive={setActiveTab} activeTab={activeTab} />
          <FeedTab title={TABS.FOR_YOU} setActive={setActiveTab} activeTab={activeTab} />
        </View>
        <Ionicons name={"search"} size={24} color={"white"}/>
      </View>

      <FlatList
        data={posts}
        renderItem={({item, index}) => (
          <PostListItem postItem={item} isActive={index === currentIndex}/>
        )}
        keyExtractor={item => item.id}
        // getItemLayout={(data, index) => ({
        //   length: height,
        //   offset: height * index,
        //   index
        // })}
        initialNumToRender={5}
        maxToRenderPerBatch={3}
        showsVerticalScrollIndicator={false}
        snapToInterval={height - insets.bottom}
        decelerationRate="fast"
        disableIntervalMomentum={true}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },
  topBar: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    paddingHorizontal: 15
  },
  navigationBar: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    gap: 30
  }
});
