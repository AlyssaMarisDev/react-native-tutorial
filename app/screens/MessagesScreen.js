import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

function MessagesScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "Lilly Loo",
      description: "Is this still available?",
      image: { uri: "https://picsum.photos/200/300" },
    },
    {
      id: 2,
      title: "Kelly Loo",
      description: "Do you have a refund policy?",
      image: { uri: "https://picsum.photos/200/300" },
    },
    {
      id: 3,
      title: "Billy Loo",
      description: "Can I pick it up?",
      image: { uri: "https://picsum.photos/200/300" },
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
