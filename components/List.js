import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListItem from "./ListItem";
import { NEWS } from "../data/dummy-data";

// Pulls out only the stories for the given category and lists them
function List({ category }) {
  const navigation = useNavigation();

  const categoryNews = NEWS.filter((newsItem) => newsItem.category === category);

  function renderNewsItem(itemData) {
    const newsItem = itemData.item;

    function pressHandler() {
      navigation.navigate("NewsDetail", { newsId: newsItem.id });
    }

    return (
      <ListItem
        imageUrl={newsItem.imageUrl}
        headline={newsItem.headline}
        date={newsItem.date}
        agency={newsItem.agency}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={categoryNews}
      keyExtractor={(item) => item.id}
      renderItem={renderNewsItem}
      contentContainerStyle={styles.listContent}
    />
  );
}

export default List;

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 8,
  },
});
