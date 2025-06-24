import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({
  children,
  title,
  color,
  style,
  onPress,
  activeOpacity = 0.7,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      {...otherProps}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
});

export default AppButton;
