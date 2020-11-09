import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../components/shop/OrderItem";
import CommerceHeader from "../components/UI/CommerceHeader";
import Colors from "../constants/Colors";

const OrdersScreen = ({ navigation }) => {
  const order = useSelector((state) => state.order.orders);
  return (
    <>
      <CommerceHeader
        title="My orders"
        leftIconName="ios-menu"
        leftIconFunc={() => navigation.toggleDrawer()}
      />
      <View>
        {order.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.message}>You dont have any Order </Text>
          </View>
        ) : (
          <FlatList
            data={order}
            renderItem={({ item }) => (
              <OrderItem
                amount={item.totalAmount}
                date={item.readableDate}
                items={item.items}
              />
            )}
          />
        )}
      </View>
    </>
  );
};
export default OrdersScreen;

const styles = StyleSheet.create({
  empty: {
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    padding: 25,
    marginTop: 30,
    alignSelf: "center",
    borderRadius: 20,
    elevation: 9,
  },
  message: {
    fontSize: 20,
    fontFamily: "open-sans",
    fontWeight: "bold",
    color: "white",
  },
});
