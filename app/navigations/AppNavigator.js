import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import ShopNavigator from "./ShopNavigator";
import Colors from "../constants/Colors";
import OrdersNavigator from "./OrdersNavigator";
import { Platform } from "react-native";
import AdminNavigator from "./AdminNavigator";

const AppNavigator = () => {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
