import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import {View,Text,StyleSheet} from "react-native"

const Bottomnav=()=>{
    const Tab=createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}></Tab.Screen>
                <Tab.Screen name="Log" component={Log}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Home=()=>{
    return(
        <View style={styles.Box}>
            <Text style={{fontSize:30}}>
                Homescreen
            </Text>
        </View>
    )
}

const Log=()=>{
    return(
        <View style={styles.Box}>
            <Text style={{fontSize:30}}>
                Logscreen
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    Box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Bottomnav