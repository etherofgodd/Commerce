import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";

const OrdersNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Orders" component={OrdersScreen} />
    </Navigator>
  );
};

export default OrdersNavigator;
