import { View, StyleSheet } from "react-native";

import List from "../components/List";

function WorldNewsScreen() {
  return (
    <View style={styles.screen}>
      <List category="world" />
    </View>
  );
}

export default WorldNewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
