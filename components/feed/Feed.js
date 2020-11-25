import React from "react";
import { Text, View, FlatList } from "react-native";
// import tweetsData from '../../data/tweetsData'
import Tweet from "../tweet/Tweet";
import tweetsData from "../../data/tweetsData";

const Feed = () => (
  <View style={{ width: "100%" }}>
    <FlatList
      data={tweetsData}
      renderItem={({ item }) => <Tweet tweet={item} />}
      //   keyExtractor={({ item }) => item.id}
    />
  </View>
);

export default Feed;

// const styles = StyleSheet.create({})
