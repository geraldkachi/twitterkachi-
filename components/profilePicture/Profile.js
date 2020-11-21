import React from "react";
import { StyleSheet, Image } from "react-native";

let size = 30;
const image = {
  uri: "https://reactnative.dev/docs/assets/p_cat1.png",
  width: size,
  height: size,
};

const Profile = () => {
  return (
    <Image
      source={image}
      style={{ width: size, height: size, borderRadius: size }}
    />
  );
};

export default Profile;

const styles = StyleSheet.create({});
