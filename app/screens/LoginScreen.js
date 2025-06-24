import Screen from "../components/Screen";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, AppFormSubmit } from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Image
          style={styles.logo}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <AppFormField name="email" placeholder="Email" icon="email" />
        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          secureTextEntry={true}
        />
        <AppFormSubmit
          title="Login"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: "15%",
    marginBottom: "5%",
  },
  loginButton: {
    marginTop: "5%",
  },
  loginButtonText: {
    color: colors.white,
  },
});

export default LoginScreen;
