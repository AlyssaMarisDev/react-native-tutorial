import { View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={colors.danger}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color="white"
        onPress={onPress}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
