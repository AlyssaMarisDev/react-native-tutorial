import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  style,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.gray0} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.details}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.black,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray3,
  },
});

export default ListItem;
