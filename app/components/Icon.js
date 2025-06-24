import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function Icon({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) {
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          borderRadius: size / 2,
          width: size,
          height: size,
          backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}

export default Icon;
