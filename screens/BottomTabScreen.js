import * as React from "react";
import { StyleSheet, Text, useColorScheme, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";

import HomeTwitter from "./bottomtabs/HomeTwitter";
import Search from "./bottomtabs/Search";
import Message from "./bottomtabs/Message";
import Notification from "./bottomtabs/Notification";

import Profile from "../components/profilePicture/Profile";

import { Ionicons, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import {
//   Entypo,
//   Ionicons,
//   SimpleLineIcons,
//   MaterialIcons,
//   Octicons,
//   // AntDesign,
//   // MaterialCommunityIcons,
// } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// const colorSheme = useColorScheme();

const BottomTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{ activeTintColor: Colors.tint, showLabel: false }}
  >
    <Tab.Screen
      name="Home"
      component={HomeTwitterNavigator}
      options={{
        // tabBarLabel: "Home",
        // tabBarColor: "blue",
        tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        // tabBarIcon: () => <Octicons name="home" size={30} color="blue" />,
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchNavigator}
      options={{
        // tabBarLabel: "Search",
        // tabBarColor: "blue",
        tabBarIcon: ({ color }) => (
          <TabBarIcon name="ios-search" color={color} />
        ),
        // tabBarIcon: () => <Octicons name="search" size={22} color="blue" />,
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationNavigator}
      options={{
        // tabBarLabel: "Notification",
        // tabBarColor: "blue",
        tabBarIcon: ({ color }) => (
          <TabBarIcon name="ios-notifications-outline" color={color} />
        ),
        // tabBarIcon: () => (
        // <Ionicons name="ios-notifications-outline" size={24} color="blue" />
        // ),
      }}
    />
    <Tab.Screen
      name="Message"
      component={MessageNavigator}
      options={{
        // tabBarLabel: "Message",
        // tabBarColor: "blue",
        tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
        // tabBarIcon: ({color}) => (
        // <TabBarIcon name="md-ome" size={24} color={color} />
        // ),
      }}
    />
  </Tab.Navigator>
);

///////////////////////////////////////////////////////////////////////////

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

////////////////////////////////////////////////////////////////////////////

//  HomeTwitter
const HomeTwitterStack = createStackNavigator();
const SearchStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const MessageStack = createStackNavigator();

const HomeTwitterNavigator = () => (
  <HomeTwitterStack.Navigator>
    <HomeTwitterStack.Screen
      name="HomeTwitterScreen"
      component={HomeTwitter}
      options={{
        headerLeft: ({ image }) => (
          <Profile
            // size={30}
            source={image}
          />
        ),
        headerLeftContainerStyle: { marginLeft: 15 },

        headerTitleAlign: "center",
        headerTitle: () => (
          <Ionicons name={"logo-twitter"} size={30} color={Colors.light.tint} />
        ),
        headerRight: () => (
          <MaterialCommunityIcons
            name={"star-four-points-outline"}
            size={30}
            color={Colors.light.tint}
          />
        ),
        headerRightContainerStyle: { marginRight: 15 },
      }}
    />
  </HomeTwitterStack.Navigator>
);

const SearchNavigator = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="SearchScreen"
      component={Search}
      options={{ headerTitle: "Search" }}
    />
  </SearchStack.Navigator>
);
const NotificationNavigator = () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen
      name="NotificationScreen"
      component={Notification}
      options={{ headerTitle: "Notification" }}
    />
  </NotificationStack.Navigator>
);

const MessageNavigator = () => (
  <MessageStack.Navigator>
    <MessageStack.Screen
      name="MessageScreen"
      component={Message}
      options={{ headerTitle: "Message" }}
    />
  </MessageStack.Navigator>
);

export default BottomTabScreen;

const styles = StyleSheet.create({});
