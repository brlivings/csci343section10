import { View, StyleSheet } from "react-native";

import List from "../components/List";

function USNewsScreen() {
  return (
    <View style={styles.screen}>
      <List category="us" />
    </View>
  );
}

export default USNewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
