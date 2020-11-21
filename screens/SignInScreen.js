import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import * as Animatable from "react-native-animatable";

import { AuthContext } from "../components/Context";

import {useTheme} from "@react-navigation/native"


// import Users from "../model/Users";


const Users = [
  {
    id: 1,
    email: 'fitzgeraldkachi@gmail.com',
    username: 'user1',
    password: 'password1',
    userToken: 'token123',
  },

  {
    id: 2,
    email: 'mariasuccess910@gmail.com',
    username: 'user2',
    password: 'password2',
    userToken: 'token1234',
  },

  {
    id: 3,
    email: 'fitzgeraldkachi@outlook.com',
    username: 'user3',
    password: 'password3',
    userToken: 'token12345',
  },
];


const SignInScreen = ({ navigation }) => {

  const {colors} =useTheme()

  // EMAIL LOGIC
  const [data, setData] = React.useState({
    emai: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const TextInputChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  // PASSWORD LOGIC
  const handlePassword = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const loginHandle = (userName, password) => {

    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    }); 
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert("Wrong Input!", "Username & password field cannot be empty.", [
        { text: "Okay" },
      ]);
      return;
    }
    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username & password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer,  {backgroundColor: colors.background}]}>
        <Text style={[styles.text_footer,{color: colors.text}]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" style={{color: colors.text}} size={20} />
          <TextInput
            placeholder="Your Email"
            style={[styles.textInput, {color: colors.text}]}
            onChangeText={(val) => TextInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        {/* Password */}
        <Text style={[styles.text_footer, { marginTop: 35, color: colors.text }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a"  style={{color: colors.text}} size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {color: colors.text}]}
            autoCapitalize="none"
            onChangeText={(val) => handlePassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" style={{color: colors.text}} size={20} />
            ) : (
              <Feather name="eye" color="grey" style={{color: colors.text}} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}
        {/* SIGN IN */}
        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, { backgroundColor: "#009387" }]}
            onPress={() => {loginHandle(data.username, data.password)}}
          >
            <Text style={[styles.textSign, { color: "#fff" }]}>SIgn In</Text>
          </TouchableOpacity>
          {/* SIGN UP */}
          <TouchableOpacity
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <Text style={[styles.textSign, { color: "#009387" }]}>
                SIgn Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      {/* <Button title="Click SignInScreen" onPress={()=> navigation.navigate("")} /> */}
    </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    marginLeft: 10,
    borderWidth: 0,  
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorMsg: {
    color: "red",
  },
});
