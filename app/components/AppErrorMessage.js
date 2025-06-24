import AppText from "./AppText";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default AppErrorMessage;
