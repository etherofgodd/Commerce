import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserProductScreen from "../screens/UserProductScreen";
import EditProductScreen from "../screens/EditProductScreen";

const AdminNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Create"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Create" component={UserProductScreen} />
      <Screen name="Edit" component={EditProductScreen} />
    </Navigator>
  );
};

export default AdminNavigator;
