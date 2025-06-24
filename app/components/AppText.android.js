import { Text, StyleSheet } from "react-native";
import fonts from "../config/text";
import colors from "../config/colors";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.android.fontSize,
    fontFamily: fonts.android.regular,
    color: colors.black,
  },
});

export default AppText;
