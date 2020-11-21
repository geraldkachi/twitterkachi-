<<<<<<< HEAD
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabScreen from "./BottomTabScreen";

const HomeStack = createStackNavigator();
=======
import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native'
import {useTheme} from "@react-navigation/native"

const HomeScreen = ({navigation}) => {

    const {colors} = useTheme()

    const theme = useTheme() 

    return (
        <View style={styles.container}>
            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
            <Text style={{color: colors.text}}>HomeScreen</Text>
            <Button title="Go to DetailScreen" onPress={()=> navigation.navigate("Detail")} />
        </View>
    )
}
>>>>>>> 3add388ce99741a48c87f1f1e7d947727aa15b63

const HomeScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="TopTab"
      component={BottomTabScreen}
      options={{
        // headerTitleStyle: "",
        headerStyle: {
          title: "Twitter",
          color: "white",
          backgroundColor: "#075E54",
        },
      }}
    />
    <HomeStack.Screen name="BottomTab" component={BottomTabScreen} />
  </HomeStack.Navigator>
);

export default HomeScreen;

const styles = StyleSheet.create({});
