import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/shop/CartItem";
import CommerceHeader from "../components/UI/CommerceHeader";
import Colors from "../constants/Colors";
import * as cartActions from "../store/actions/cartActions";
import * as orderActions from "../store/actions/orderActions";

const CartScreen = ({ navigation }) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    const cart = [];
    for (const key in state.cart.items) {
      cart.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        amountTotal: state.cart.items[key].amountTotal,
      });
    }
    return cart.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });

  return (
    <>
      <CommerceHeader
        title="My Cart"
        leftIconName="ios-arrow-back"
        leftIconFunc={() => navigation.goBack()}
      />
      <View style={styles.screen}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total:{" "}
            <Text style={styles.amount}>
              &#8358;
              {Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
            </Text>
          </Text>
          <Button
            color={Colors.accent}
            title="Order Now "
            disabled={cartItems.length === 0}
            onPress={() => {
              dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
            }}
          />
        </View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={({ item }) => (
            <CartItem
              quantity={item.quantity}
              amount={item.amountTotal}
              title={item.productTitle}
              deleteable
              onRemove={() => {
                dispatch(cartActions.removeFromCart(item.productId));
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
