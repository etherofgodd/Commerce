import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import * as cartActions from "../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import CommerceHeader from "../components/UI/CommerceHeader";
import CommerceButton from "../components/UI/CommerceButton";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <>
      <CommerceHeader
        title={route.params.productTitle}
        leftIconName="ios-arrow-back"
        leftIconFunc={() => navigation.goBack()}
        rightIconName="ios-cart"
        rightIconFunc={() => navigation.navigate("CartScreen")}
      />
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
        <View style={styles.actions}>
          <CommerceButton
            buttonText="Add to cart"
            onPress={() => {
              dispatch(cartActions.addToCart(selectedProduct));
            }}
          />
        </View>
        <Text style={styles.price}>
          &#8358;
          {selectedProduct.price.toFixed()}
        </Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});
