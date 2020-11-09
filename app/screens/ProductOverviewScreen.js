import React from "react";
import { FlatList, StyleSheet, Button, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/shop/ProductItem";
import CommerceButton from "../components/UI/CommerceButton";
import CommerceHeader from "../components/UI/CommerceHeader";
import Colors from "../constants/Colors";
import * as cartActions from "../store/actions/cartActions";

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  const viewDetail = (item) => {
    navigation.navigate("Product Detail", {
      productId: item.id,
      productTitle: item.title,
    });
  };
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CommerceHeader
        title="All Products"
        leftIconName={Platform.OS === "android" ? "ios-menu" : "ios-menu"}
        rightIconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        rightIconFunc={() => navigation.navigate("CartScreen")}
        leftIconFunc={() => navigation.toggleDrawer()}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            image={item.imageUrl}
            price={item.price}
            title={item.title}
            viewDetail={() => viewDetail(item)}
          >
            <CommerceButton
              buttonText="View details"
              onPress={() => viewDetail(item)}
            />
            <CommerceButton
              buttonText="Add to cart"
              onPress={() => addToCart(item)}
            />
          </ProductItem>
        )}
      />
    </>
  );
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
