import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  tweetcontainer: { flexDirection: "row", justifyContent: "space-between" },
  tweet: { flexDirection: "row" },
  name: {
    // marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 2,
    color: "grey",
  },
  createdAt: {
    marginHorizontal: 2,
    color: "grey",
  },
  content: { marginTop: 5, lineHeight: 18 },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 15,
    overflow: "hidden",
  },
  // number: {
  //   color: "grey",
  //   marginLeft: 5,
  // },
});

export default styles;
