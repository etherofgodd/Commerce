import React from "react";
import { StyleSheet, Text, View, FlatList, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/shop/ProductItem";
import CommerceButton from "../components/UI/CommerceButton";
import CommerceHeader from "../components/UI/CommerceHeader";
import { deleteProduct } from "../store/actions/productsActions";

const UserProductScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProduct = (id) => {
    navigation.navigate("Edit", { productId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert("Are you sure ?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => dispatch(deleteProduct(id)),
      },
    ]);
  };
  return (
    <>
      <CommerceHeader
        title="Create Products"
        leftIconName="ios-menu"
        leftIconFunc={() => navigation.toggleDrawer()}
        rightIconName="ios-create"
        rightIconFunc={() => navigation.navigate("Edit", {})}
      />
      <FlatList
        data={userProducts}
        renderItem={({ item }) => (
          <ProductItem
            image={item.imageUrl}
            title={item.title}
            price={item.price}
          >
            <CommerceButton
              buttonText="Edit"
              onPress={() => {
                editProduct(item.id);
              }}
            />
            <CommerceButton
              buttonText="Delete"
              onPress={() => deleteHandler(item.id)}
            />
          </ProductItem>
        )}
      />
    </>
  );
};

export default UserProductScreen;

const styles = StyleSheet.create({});
