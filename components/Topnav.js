import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import {Text,View,StyleSheet} from "react-native"


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

const Topnav=()=>{
    const Tab= createMaterialTopTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}></Tab.Screen>
                <Tab.Screen name="Log" component={Log}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    Box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Topnav