import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Profile from "../../profilePicture/Profile";

const LeftContainer = ({ user }) => {
  return (
    <View
    // style={{ marginHorizontal: 0 }}
    >
      <Profile image={user.image} size={100} />
    </View>
  );
};

export default LeftContainer;

const styles = StyleSheet.create({});
