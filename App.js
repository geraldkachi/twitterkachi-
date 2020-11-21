<<<<<<< HEAD
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import TobTabScreen from "./screens/TopTabScreen";
import BottomTabScreen from "./screens/BottomTabScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      // initialRouteName="Home"
      // headerMode={false}  children={HomeStack}
      >
        <Drawer.Screen name="BottomTab" component={BottomTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
=======
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme, 
  DarkTheme as NavigationDarkTheme 
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import RoutesBottomTab from "./navigation/RoutesBottomTab";

import { DrawerContent } from "./navigation/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import ProfileScreen from "./screens/ProfileScreen";


import { AuthContext } from "./components/Context";
import RootStackScreen from "./navigation/RootStackScreen";

import AsyncStorage from "@react-native-community/async-storage";

const Drawer = createDrawerNavigator();

// const position = pos == "right"?"left":"right";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  // white which is the default App theme Color
  const MyDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#fff",
      text:"#333333"
    }
  }
  
  // Dark which is the default App theme Color
  const MyCustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#fff"
    }
  }

  const theme = isDarkTheme ?  MyDefaultTheme : MyCustomDarkTheme 

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => ({
      signIn: async(foundUser) => {
        // setUserToken("kachi")
        // setIsLoading(false)
        // let userToken;
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;
        // if (userName == "user" && password == "pass")
          try {
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log(e);
          }
        
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async() => {
        // setUserToken(null)
        // setIsLoading(false)
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken("kachi")
        // setIsLoading(false)
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme)
      }
    }),
    []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false)
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      //
      // dispatch({type: "LOGIN", token: "kachi"})
      dispatch({ type: "REGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    // drawerPosition="right"
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator   screenOptions={{
              headerShown: false
            }}
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={RoutesBottomTab} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
>>>>>>> 3add388ce99741a48c87f1f1e7d947727aa15b63
  );
};

export default App;

<<<<<<< HEAD
const styles = StyleSheet.create({});
//   <Drawer.Screen name="Home" children={HomeScreen} />
// <Drawer.Screen name="TopTabs" component={TobTabScreen} />
=======
// const styles = StyleSheet.create({})

// <Drawer.Navigator initialRouteName="Home">
//     <Drawer.Screen name="Home" component={HomeScreen}/>
//     <Drawer.Screen name="Detail" component={DetailScreen} />
// </Drawer.Navigator>

//////////////////////////////////////////////

// const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()

//     const createHomeStack = ({navigation}) =>
//     <Stack.Navigator screenOptions={{
//         headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"}
//     }}>
//         <Stack.Screen name="Home" component={HomeScreen}
//         options={{ title:"HomeScreen",
//          headerLeft:()=> ( <Button title="Menu" onPress={()=> navigation.openDrawer() }/>)
//          }} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//     </Stack.Navigator>

// const App = () => {
//     return (
//         <NavigationContainer >
//             <Drawer.Navigator screenOptions={{
//                 headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"}
//             }}>
//                 <Drawer.Screen name="Home" component={createHomeStack}
//                 options={{ title:"OverView" }} />
//                 <Drawer.Screen name="Detail" component={DetailScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }
>>>>>>> 3add388ce99741a48c87f1f1e7d947727aa15b63
