import {useMemo, useRef, useState} from "react";
import {StyleSheet, FlatList, View, Dimensions, ViewToken, ActivityIndicator, Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";

import PostListItem from "../../../components/PostListItem";
import FeedTab from "../../../components/GenericComponents/FeedTab";
import { fetchPosts } from "../../../services/posts";
import {LocalColors} from "../../../constants/Colors";

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

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({pageParam}) => fetchPosts(pageParam),
    initialPageParam: { limit: 3, cursor: undefined },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined
      return {
        limit: 3,
        cursor: lastPage[lastPage.length - 1].id
      }
    }
  })

  const posts = useMemo(() => data?.pages.flat() || [], [data])

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0]?.index || 0)
    }
  })

  if (isLoading) {
    return (
      <ActivityIndicator size={"large"} color={"white"} style={{ flex: 1, justifyContent: 'center' }}/>
    )
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            color: LocalColors.white,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18
          }}
        >
          Error occured while fetching posts. Please try again later.
        </Text>
      </View>
    )
  }

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
        data={posts || []}
        renderItem={({item, index}) => (
          <PostListItem postItem={item} isActive={index === currentIndex}/>
        )}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({
          length: height - 80,
          offset: (height - 80) * index,
          index
        })}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        showsVerticalScrollIndicator={false}
        snapToInterval={height - insets.bottom}
        decelerationRate="fast"
        disableIntervalMomentum={true}
        onViewableItemsChanged={onViewableItemsChanged.current}
        onEndReached={() => !isFetchingNextPage && hasNextPage && fetchNextPage()}
        onEndReachedThreshold={2}
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
