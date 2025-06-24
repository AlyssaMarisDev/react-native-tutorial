import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={{ uri: "https://picsum.photos/400/800" }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.logoImage}></View>
            <AppText style={styles.logoText}>Sell What You Don't Need</AppText>
          </View>
        </View>
        <AppButton
          style={styles.loginButton}
          onPress={() => console.log("Login button pressed")}
        >
          <AppText>Login</AppText>
        </AppButton>
        <AppButton
          style={{ backgroundColor: colors.secondary }}
          onPress={() => console.log("Register button pressed")}
        >
          <AppText>Register</AppText>
        </AppButton>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingBottom: "15%",
  },
  background: {
    flex: 1,
  },
  loginButton: {
    marginBottom: "2%",
  },
  logoContainer: {
    backgroundColor: colors.black,
    position: "absolute",
    alignSelf: "center",
    top: "25%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    backgroundColor: "transparent",
    flex: 8,
  },
  logoImage: {
    backgroundColor: colors.secondary,
    height: 100,
    width: 100,
  },
  logoText: {
    color: "white",
  },
});
