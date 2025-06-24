import { StyleSheet, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import fonts from "../config/text";

function AppTextInput({
  secureTextEntry,
  placeholder,
  value,
  onChangeText,
  icon,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={24} style={styles.icon} />
      )}
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={colors.gray2}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray0,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.gray0,
    padding: 5,
    marginVertical: 10,
    width: "100%",
  },
  textInput: {
    flex: 1,
    fontSize: fonts.android.fontSize,
    fontFamily: fonts.android.regular,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
    color: colors.gray4,
  },
});

export default AppTextInput;
