import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
    color: colors.black,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
