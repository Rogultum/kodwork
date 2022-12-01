import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./Button.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Button = ({ title, onPress, icon }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name={icon} size={24} color="white" />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
