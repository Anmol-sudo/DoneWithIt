import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

// Get the current window width
// This is a crucial step for creating responsive designs
const { width: screenWidth } = Dimensions.get("window");

function AppTextInput({ icon, width = "100%", multiple=false, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      )}
      <TextInput
        multiline={multiple}
        numberOfLines={multiple? +10 : 1}
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.textInput, multiple && styles.multiText ]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  iconContainer: {
    // Calculate width dynamically based on screen width
    // This creates a proportional width that adapts to different device sizes
    width: screenWidth * 0.08, // 8% of screen width
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
  },
  multiText: {
    textAlignVertical: "top",
    height: 200
  }
});

export default AppTextInput;
