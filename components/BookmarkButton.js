import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Header button that shows a filled or outlined bookmark
function BookmarkButton({ bookmarked, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons
        name={bookmarked ? "bookmark" : "bookmark-outline"}
        size={24}
        color="white"
      />
    </Pressable>
  );
}

export default BookmarkButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
