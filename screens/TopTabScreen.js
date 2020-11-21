import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Camera from "./tabs/Camera";
import Chats from "./tabs/Chats";
import Status from "./tabs/Status";
import Calls from "./tabs/Calls";

const Tab = createMaterialTopTabNavigator();

const TopTabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Camera" component={Camera} />
    <Tab.Screen name="Chats" component={Chats} />
    <Tab.Screen name="Status" component={Status} />
    <Tab.Screen name="Calls" component={Calls} />
  </Tab.Navigator>
);

export default TopTabScreen;

const styles = StyleSheet.create({});
