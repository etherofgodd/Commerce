import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem = ({ image, title, price, children }) => {
  return (
    <View style={styles.product}>
      <View style={styles.imageCOntainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>&#8358;{price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>{children}</View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    elevation: 7,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imageCOntainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "17%",
    padding: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20,
  },
});
