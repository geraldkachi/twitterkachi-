import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const Camera = () => {
  return (
    <View>
      <Fontisto name="camera" size={24} color="black" />
      <Text>Camera</Text>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
