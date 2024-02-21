import React from "react"
import {Text,View} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cartheader from "./Cartheader"
import Userlist from "./Userlist"

const Maincart=()=>{

    const Stack=createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Cartheader}></Stack.Screen>
                <Stack.Screen name="UserList" component={Userlist}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Maincart