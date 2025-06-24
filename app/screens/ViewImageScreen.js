import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={35} color={colors.white} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color={colors.white}
          />
        </View>
      </View>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/400/800" }}
      ></Image>
      <View style={styles.bottomContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    left: 20,
  },
  deleteIcon: {
    right: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    backgroundColor: "transparent",
    flex: 4,
  },
  topContainer: {
    backgroundColor: colors.black,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
