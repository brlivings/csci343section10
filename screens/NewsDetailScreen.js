import { useState, useLayoutEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

import BookmarkButton from "../components/BookmarkButton";
import { NEWS } from "../data/dummy-data";
import Colors from "../constants/colors";

function NewsDetailScreen({ route, navigation }) {
  const newsId = route.params.newsId;
  const selectedNews = NEWS.find((newsItem) => newsItem.id === newsId);

  // Only flips the icon for now, real saving comes next week
  const [isBookmarked, setIsBookmarked] = useState(false);

  function bookmarkHandler() {
    setIsBookmarked((current) => !current);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedNews.agency,
      headerRight: () => (
        <BookmarkButton bookmarked={isBookmarked} onPress={bookmarkHandler} />
      ),
    });
  }, [navigation, selectedNews, isBookmarked]);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{ uri: selectedNews.imageUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.agency}>{selectedNews.agency}</Text>
          <Text style={styles.date}>{selectedNews.date}</Text>
        </View>
        <Text style={styles.author}>By {selectedNews.author}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: Colors.border,
  },
  body: {
    padding: 18,
  },
  headline: {
    fontFamily: "serifBold",
    fontSize: 22,
    lineHeight: 30,
    color: Colors.text,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  agency: {
    fontFamily: "sansBold",
    fontSize: 14,
    color: Colors.accent,
    textTransform: "uppercase",
  },
  date: {
    fontFamily: "sans",
    fontSize: 14,
    color: Colors.muted,
  },
  author: {
    fontFamily: "sans",
    fontSize: 15,
    color: Colors.primary,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 14,
  },
  description: {
    fontFamily: "sans",
    fontSize: 17,
    lineHeight: 26,
    color: Colors.text,
  },
});
