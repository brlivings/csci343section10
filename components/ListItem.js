import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

// One row in a news list: picture, headline and date
function ListItem({ imageUrl, headline, date, agency, onPress }) {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.border }}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.agency}>{agency}</Text>
          <Text style={styles.headline} numberOfLines={3}>
            {headline}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 14,
    marginVertical: 7,
    backgroundColor: Colors.card,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: 110,
    height: 110,
    backgroundColor: Colors.border,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  agency: {
    fontFamily: "sansBold",
    fontSize: 12,
    color: Colors.accent,
    textTransform: "uppercase",
  },
  headline: {
    fontFamily: "serifBold",
    fontSize: 15,
    color: Colors.text,
  },
  date: {
    fontFamily: "sans",
    fontSize: 13,
    color: Colors.muted,
  },
});
