import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./app/navigations/ShopNavigator";

import store from "./app/store/store";
import OrdersNavigator from "./app/navigations/OrdersNavigator";
import AppNavigator from "./app/navigations/AppNavigator";
import CommerceHeader from "./app/components/UI/CommerceHeader";
import CommerceButton from "./app/components/UI/CommerceButton";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
