import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { EvilIcons, AntDesign, Feather } from "@expo/vector-icons";

const TweeetFooter = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContanier}>
        <Feather name="message-circle" size={20} color="grey" />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContanier}>
        <EvilIcons name="retweet" size={20} color="grey" color="grey" />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContanier}>
        <AntDesign name="hearto" size={20} color="grey" />
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.iconContanier}>
        <EvilIcons name="share-google" size={20} color="grey" />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
    </View>
  );
};

export default TweeetFooter;

// const styles = StyleSheet.create({});
