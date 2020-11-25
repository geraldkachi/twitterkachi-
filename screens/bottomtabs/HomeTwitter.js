import React from "react";
import { StyleSheet, View } from "react-native";
// import Tweet from "../../components/tweet/Tweet";
// import tweetsData from "../../data/tweetsData";
import Feed from "../../components/feed/Feed";
import FloatTweetButton from "../../components/FloatTweetButton/FloatTweetButton";

const HomeTwitter = () => {
  return (
    <View style={styles.container}>
      <Feed />
      <FloatTweetButton />
    </View>
  );
};

export default HomeTwitter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

/*  <View style={styles.container}>
      <Tweet tweet={tweetsData[0]} />
</View> */
