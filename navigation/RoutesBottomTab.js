import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExploreScreen from "../screens/ExploreScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RoutesBottomTab = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="HomeStackScreen"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="DetailStackScreen"
      component={DetailStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="access-point" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default RoutesBottomTab;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "HomeScreen",
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            style={{ marginHorizontal: 15 }}
            color="white"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    {/* <HomeStack.Screen name="Detail" component={DetailScreen} /> */}
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1f65ff" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <DetailStack.Screen
      name="Home"
      component={DetailScreen}
      options={{
        title: "HomeScreen",
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            color="white"
            style={{ marginHorizontal: 15 }}
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    {/* <DetailStack.Screen name="Detail" component={DetailScreen} /> */}
  </DetailStack.Navigator>
);
