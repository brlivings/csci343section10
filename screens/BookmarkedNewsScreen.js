import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

// Placeholder for now, saved stories get hooked up next week
function BookmarkedNewsScreen() {
  return (
    <View style={styles.screen}>
      <Ionicons name="bookmarks-outline" size={48} color={Colors.inactive} />
      <Text style={styles.title}>No saved stories yet</Text>
      <Text style={styles.text}>
        Stories you bookmark will show up here.
      </Text>
    </View>
  );
}

export default BookmarkedNewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontFamily: "serifBold",
    fontSize: 18,
    color: Colors.primary,
    marginTop: 12,
  },
  text: {
    fontFamily: "sans",
    fontSize: 15,
    color: Colors.muted,
    marginTop: 6,
    textAlign: "center",
  },
});
