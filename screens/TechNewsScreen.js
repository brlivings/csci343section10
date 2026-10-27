import { View, StyleSheet } from "react-native";

import List from "../components/List";

function TechNewsScreen() {
  return (
    <View style={styles.screen}>
      <List category="tech" />
    </View>
  );
}

export default TechNewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
