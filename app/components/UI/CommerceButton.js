import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

const CommerceButton = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CommerceButton;

const styles = StyleSheet.create({
  button: {
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: "40%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 15,
  },
});
