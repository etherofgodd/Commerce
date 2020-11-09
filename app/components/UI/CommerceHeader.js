import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const CommerceHeader = ({
  leftIconName,
  title,
  rightIconName,
  rightIconFunc,
  leftIconFunc,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={leftIconFunc}>
        <Ionicons name={leftIconName} color={Colors.primary} size={23} />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onPress={rightIconFunc}>
        <Ionicons name={rightIconName} color={Colors.primary} size={23} />
      </TouchableOpacity>
    </View>
  );
};

export default CommerceHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "11%",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 13,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.primary,
  },
});
