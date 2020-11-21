import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LeftContainer from "../tweet/LeftContainer/LeftContainer";
import MainContainer from "../tweet/MainContainer/MainContainer";

import styles from "./styles";

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;

// const styles = StyleSheet.create({
//   containerTweet: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//   },
// });

// bezz Believe proud american
