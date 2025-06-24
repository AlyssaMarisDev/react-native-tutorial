import { View } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray0,
  },
});

export default ListItemSeparator;
