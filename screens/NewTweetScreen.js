import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Profile from "../components/profilePicture/Profile";

const NewTweetScreen = ({ navigation }) => {
  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onPressTweet = () => {
    console.log(`Posting Tweet: ${tweet}
    Image: ${imageUrl}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{ color: "#4D9FEC", fontSize: 15 }}
            onPress={() => navigation.goBack()}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        {/* <AntDesign name="close" size={30} color={Colors.light.tint} /> */}
        <TouchableOpacity onPress={onPressTweet} style={styles.button}>
          <Text style={styles.text}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <Profile
          image={
            "https://pbs.twimg.com/profile_images/923879979003375616/ONKifwUI_400x400.jpg"
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => setTweet(value)}
            value={tweet}
            multiline={true}
            numberOfLines={3}
            placeholder="What's happening?"
          />
          <TextInput
            style={styles.imageInput}
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            placeholder="Image url (optional)"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  headerCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#4D9FEC",
    paddingHorizontal: 15,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  text: {
    color: "white",
  },
  newTweetContainer: { flexDirection: "row", padding: 10 },
  inputContainer: { marginLeft: 10 },
  textInput: { height: 100, maxHeight: 300, fontSize: 12, border: 1 },
  imageInput: {},
});
