import * as React from "react";
import { StyleSheet, Text, useColorScheme, View, Image,Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";

import HomeTwitter from "./bottomtabs/HomeTwitter";
import Search from "./bottomtabs/Search";
import Message from "./bottomtabs/Message";
import Notification from "./bottomtabs/Notification";

// import Profile from "../components/profilePicture/Profile";

import {
  Ionicons,
  Octicons,
  Entypo,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
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

const HomeTwitterNavigator = ({ navigation }) => (
  <HomeTwitterStack.Navigator>
    <HomeTwitterStack.Screen
      name="HomeTwitterScreen"
      component={HomeTwitter}
      options={{
        headerLeft: ({ image }) => (
          <MaterialIcons
            name="menu"
            size={24}
            color={Colors.light.tint}
            onPress={() => navigation.openDrawer()}
          />
          // <Entypo name="menu" size={24} color={Colors.light.tint} />
          // <Profile source={image} />
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
            onPress={()=> Alert.alert('My Message', "My Title", [
              {texy: 'Yes', onPress: () => {}},
              {text: "No", onPress: () => {}}
            ])}
            // onPress={()=> Alert.prompt('My Message', "My Title", text => console.log(text) )}
            //  this API only work at this time on ios
          />
        ),
        headerRightContainerStyle: { marginRight: 15 },
      }}
    />
  </HomeTwitterStack.Navigator>
);
/////////////////////////////////////////////////////////////////////////////////

const SearchNavigator = ({ navigation }) => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="SearchScreen"
      component={Search}
      options={{
        headerLeft: ({ image }) => (
          <MaterialIcons
            name="menu"
            size={24}
            color={Colors.light.tint}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerLeftContainerStyle: { marginLeft: 15 },
        headerTitleAlign: "center",
        headerTitle: () => (
          <View style={{ flexDirection: "row", backgroundColor: "" }}>
            {/* <EvilIcons name={"search"} size={30} color={Colors.light.tint} /> */}
            <TextInput placeholder="Search Twitter" 
            // style={{textAlign:'center'}}
             />
          </View>
        ),
        headerRight: () => (
          <Feather name={"settings"} size={30} color={Colors.light.tint} />
        ),
        headerRightContainerStyle: { marginRight: 15 },
      }}
    />
  </SearchStack.Navigator>
);

/////////////////////////////////////////////////////////////////////////

const NotificationNavigator = ({ navigation }) => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen
      name="NotificationScreen"
      component={Notification}
      options={{
        headerLeft: ({ image }) => (
          <MaterialIcons
            name="menu"
            size={24}
            color={Colors.light.tint}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerLeftContainerStyle: { marginLeft: 15 },
        headerTitleAlign: "center",
        headerTitle: () => "Notification",
        headerRight: () => (
          <Feather name={"settings"} size={30} color={Colors.light.tint} />
        ),
        headerRightContainerStyle: { marginRight: 15 },
      }}
    />
  </NotificationStack.Navigator>
);

////////////////////////////////////////////////////////////////////////////

const MessageNavigator = ({ navigation }) => (
  <MessageStack.Navigator>
    <MessageStack.Screen
      name="MessageScreen"
      component={Message}
      options={{
        headerLeft: ({ image }) => (
          <MaterialIcons
            name="menu"
            size={24}
            color={Colors.light.tint}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerLeftContainerStyle: { marginLeft: 15 },
        headerTitleAlign: "center",
        headerTitle: () => "Messages",
        headerRight: () => (
          <Feather name={"settings"} size={30} color={Colors.light.tint} />
        ),
        headerRightContainerStyle: { marginRight: 15 },
      }}
    />
  </MessageStack.Navigator>
);

export default BottomTabScreen;

const styles = StyleSheet.create({});
