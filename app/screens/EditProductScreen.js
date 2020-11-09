import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CommerceHeader from "../components/UI/CommerceHeader";
import { createProduct, updateProduct } from "../store/actions/productsActions";

const EditProductScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();

  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId)
  );

  console.log(editedProduct);
  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const submitHandler = () => {
    console.log("I am working");
    if (editedProduct !== undefined) {
      dispatch(updateProduct(productId, title, description, imageUrl));
    } else if (editedProduct === undefined) {
      dispatch(createProduct(title, description, imageUrl, +price));
    }
    navigation.navigate("Create");
  };

  return (
    <>
      <CommerceHeader
        title={editedProduct !== undefined ? "Edit Product" : "Add Product"}
        leftIconName="ios-arrow-back"
        leftIconFunc={() => navigation.goBack()}
        rightIconName="md-checkmark"
        rightIconFunc={() => submitHandler()}
      />
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image Url</Text>
            <TextInput
              style={styles.input}
              value={imageUrl}
              onChangeText={(text) => setImageUrl(text)}
            />
          </View>
          {editedProduct ? null : (
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                style={styles.input}
                value={price}
                onChangeText={(text) => setPrice(text)}
              />
            </View>
          )}
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
