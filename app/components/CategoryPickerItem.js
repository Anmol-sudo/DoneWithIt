import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const screen = Dimensions.get("window");
const itemWidth = screen.width / 3;

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
