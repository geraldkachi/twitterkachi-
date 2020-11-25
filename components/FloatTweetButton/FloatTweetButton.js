import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const FloatTweetButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewTweet");
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.button}
    >
      <MaterialCommunityIcons name="feather" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatTweetButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.light.tint,
    position: "absolute",
    bottom: 10,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 60,
    elevation: 2,
  },
});
