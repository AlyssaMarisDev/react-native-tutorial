import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormSubmit,
} from "../components/forms";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

function ListingEditScreen() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
  });

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Electronics", value: 3 },
  ];

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          icon="apps"
        />
        <AppFormSubmit title="Post" style={styles.submitButton} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  submitButton: {
    marginTop: 10,
  },
});

export default ListingEditScreen;
