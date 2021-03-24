import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import TobTabScreen from "./screens/TopTabScreen";
import BottomTabScreen from "./screens/BottomTabScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./screens/drawerContent/DrawerContent";
import NewTweetScreen from "./screens/NewTweetScreen";
//  import DrawerContent from "./screens/drawerContent/DrawerContent"

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="BottomTab"
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="BottomTab" component={BottomTabScreen} />
        <Drawer.Screen name="NewTweet" component={NewTweetScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// Detecting Orientation changes thats the rotation of the phone or app  you go to app.,json
 // "orientation": "landscape",
    // "orientation": "default",
  //  this is better use can install... npm i @react-native-community/hooks
  // import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default App;

// rnss react antive stylesheet
// retrograde ejaculation  
const styles = StyleSheet.create({});

// initialRouteName="Home"
// children={HomeStack}
// drawerContent={(props) => <DrawerContent {...props} />
// screenOptions={{ headerShown: false }}

//   <Drawer.Screen name="Home" children={HomeScreen} />
// <Drawer.Screen name="TopTabs" component={TobTabScreen} />
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
