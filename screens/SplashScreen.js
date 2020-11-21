import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button,Alert } from 'react-native'
// import LinearGradient from "react-native-linear-gradient"
import * as Animatable from "react-native-animatable"
import Icon from "react-native-vector-icons/MaterialIcons"
import {useTheme} from "@react-navigation/native"
// import { Ionicons, MaterialIcons } from "@expo/vector-icons"
// import * as Font from "expo-font"


// const getFont = () => Font.loadAsync({
//         "Roboto-Regular": require("../assets/fonts/Roboto-Regular"),
//         "Roboto-bold" : require("../assets/fonts/Roboto-Regular")
//     })


const SplashScreen = ({navigation}) => {
    const {colors } = useTheme()
    return (
        <View style={styles.container}>
           <View style={styles.header}>
               <View style={{ borderRadius: 50 }}>
                  <Animatable.Image animation="bounceIn" duration="1500" source={require("../assets/splash.png")} style={styles.logo}  resizeMode="stretch" />
               </View>
           </View>
           <Animatable.View animation="fadeInUpBig" style={[styles.footer, {
               backgroundColor: colors.background
           }]}>
               <Text style={[styles.title,{
                   color: colors.text
               }]}>Stay connected with everyone!</Text>
               <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn,styles.ban]} onPress={()=> navigation.navigate("SignInScreen")}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={styles.textbutton}>Get Started</Text>
                            <Icon style={{textAlign:"center", paddingTop:5}} name="keyboard-arrow-right" color="#fff" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
           </Animatable.View>
        </View>
    )
}

{/* <Ionicons name="md-checkmark-circle" size={20} color="green" />
<MaterialIcons name="delete" size={20} color="green" /> */}

export default SplashScreen
const{height} = Dimensions.get("screen")
const height_logo = height * 0.28;

const styles = StyleSheet.create({
   
    ban:{
        backgroundColor:"#01ab9d",
        color:"#fff",
       
    },
    container:{
        flex:1,
        backgroundColor:"#009387"
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width: height_logo,
        height: height_logo,
        borderRadius: 50
    },  
    title:{
      color:"#05375a",
      fontSize:30,
      fontWeight:"bold",
    }, 
    textbutton:{
        color:"white",
        textAlign: "center",
        paddingVertical: 10,
    },
    text:{
        color:"grey",
        marginTop: 5,
    },
    button:{
        alignItems:"flex-end",
        marginTop:30
    },
    signIn:{
        width:150,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row",
    },
    textSign:{
        color:"white",
        fontWeight:"bold"
    },
})


{/* <LinearGradient colors={["#08d4c4","#01ab9d"]} style={styles.signIn}>
    <Text style={style.text}>Get Started</Text>
    <Icon name="naviagte-next" color="#fff" size={20}/>
</LinearGradient> */}