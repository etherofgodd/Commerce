import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductOverviewScreen from "../screens/ProductOverviewScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";

const ShopNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="All Products" component={ProductOverviewScreen} />
      <Screen name="Product Detail" component={ProductDetailScreen} />
      <Screen name="CartScreen" component={CartScreen} />
    </Navigator>
  );
};

export default ShopNavigator;
