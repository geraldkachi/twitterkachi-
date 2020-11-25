import React from "react";
import { StyleSheet, Image } from "react-native";

let size = 60;
const image = {
  uri:
    "https://pbs.twimg.com/profile_images/1329640370565738497/UojmBzVK_400x400.jpg",
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
