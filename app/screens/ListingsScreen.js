import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import colors from "../config/colors";

function ListingsScreen() {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 1000,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Chair in the best condition",
      price: 50,
      image: "https://picsum.photos/200/300",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Card
        title={item.title}
        subTitle={`$${item.price}`}
        image={{ uri: item.image }}
        style={styles.card}
      />
    );
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.gray0,
  },
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});

export default ListingsScreen;
