import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  const listing = {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: { uri: "https://picsum.photos/200/300" },
  };

  return (
    <Screen style={styles.container}>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        <ListItem
          image={{ uri: "https://picsum.photos/200/300" }}
          title="John Doe"
          subTitle="5 Listings"
          otherStyles={styles.userContainer}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 28,
    color: colors.black,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginTop: 30,
  },
});

export default ListingDetailsScreen;
