import React from "react";
import { StyleSheet, View } from "react-native";
import Tweet from "../../components/tweet/Tweet";
import tweetsData from "../../data/tweetsData";

const HomeTwitter = () => {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweetsData[0]} />
    </View>
  );
};

export default HomeTwitter;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
