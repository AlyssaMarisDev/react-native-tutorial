import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

function AccountScreen() {
  const menuItems = [
    {
      title: "My Listings",
      icon: "format-list-bulleted",
    },
    {
      title: "My Messages",
      icon: "email",
    },
  ];

  return (
    <Screen style={styles.container}>
      <ListItem
        title="Lilly Loo"
        subTitle="lilly@gmail.com"
        style={styles.profile}
        IconComponent={
          <Icon
            name="account"
            size={50}
            backgroundColor={colors.primary}
            iconColor="white"
          />
        }
      />

      <View style={styles.listActions}>
        {menuItems.map((item) => (
          <>
            <ListItem
              title={item.title}
              style={styles.profile}
              IconComponent={
                <Icon
                  name={item.icon}
                  size={40}
                  backgroundColor={colors.primary}
                  iconColor="white"
                />
              }
            />
            <ListItemSeparator />
          </>
        ))}
      </View>

      <ListItem
        title="Log Out"
        style={styles.logout}
        IconComponent={
          <Icon
            name="logout"
            size={40}
            backgroundColor={colors.warning}
            iconColor="white"
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray0,
  },
  profile: {
    backgroundColor: colors.white,
  },
  listings: {
    backgroundColor: colors.white,
  },
  listActions: {
    marginTop: 20,
    backgroundColor: colors.white,
  },
  logout: {
    marginTop: 20,
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
