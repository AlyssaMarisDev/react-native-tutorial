import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function Screen({ children, style }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, style]}>{children}</View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
