import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

// import TweetFooter from "../footer/TweetFooter";

const MainContainer = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetcontainer}>
        <View style={styles.tweet}>
          {/* {username} */}
          <Text style={styles.name}>{tweet.user.name}</Text>
          {/* contents */}
          <Text style={styles.username}>@{tweet.user.username}</Text>
          {/* tweet footer */}
          <Text style={styles.createdAt}>15s</Text>
        </View>
        <Entypo name="chevron-down" size={16} color="grey" />
      </View>
      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        {!tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
      </View>
      <View>{/* <TweetFooter /> */}</View>
    </View>
  );
};

export default MainContainer;

// const styles = StyleSheet.create({});
