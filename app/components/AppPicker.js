import { StyleSheet, View, Modal, Button } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import AppText from "./AppText";
import { Pressable, FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import PickerItem from "./PickerItem";

function AppPicker({
  placeholder,
  selectedItem,
  onSelectedItem,
  icon = "apps",
  items,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Pressable style={styles.container} onPress={handlePress}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={24} style={styles.icon} />
        )}
        <View style={styles.textContainer}>
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
        </View>
        <MaterialCommunityIcons
          name="chevron-down"
          size={24}
          style={styles.icon}
        />
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectedItem(item);
              }}
            />
          )}
        />
        <Button title="close" onPress={() => setModalVisible(false)} />
      </Modal>
    </>
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
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: colors.black,
  },
  placeholder: {
    color: colors.gray2,
  },
  icon: {
    marginRight: 10,
    color: colors.gray4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppPicker;
