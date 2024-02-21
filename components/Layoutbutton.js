import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useState } from "react"
import {View,Text,Button, StyleSheet, TextInput} from "react-native"

const Stack=createNativeStackNavigator();
const Layoutbutton=()=>{
    const Home=({navigation})=>{
        const [users,setusers]=useState({name:"",age:""})
        return(
        
        <View style={styles.Box}>
            <TextInput onChangeText={(text)=>setusers(prev=>({...prev,name:text}))} placeholder="Enter Name" value={users.name}></TextInput>
            <TextInput onChangeText={(text)=>setusers((prev=>({...prev,age:text})))} placeholder="Enter Age" value={users.age}></TextInput>
            <Text style={{fontSize:30,marginBottom:10}}>Homescreen</Text>
            <Button title="Submit" onPress={()=>navigation.navigate("Log",{users})}></Button>
        </View>
        )
    }
    const Log=({navigation,route})=>{
        const {name,age}=route.params.users
        return(
        <View style={styles.Box} >
            <Text style={{fontSize:20}}> Name : {name}</Text>
            <Text style={{fontSize:20}}> Age : {age}</Text>
            
            <Text style={{fontSize:30,marginBottom:10}}>Logscreen</Text>
            <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}></Button>
        </View>
        )
    }

    
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor:"orange"
                },
                headerTitleStyle:{
                    color:"black",
                    fontSize:25
                },
                headerTintColor:"red"
            }
                
            }>
                <Stack.Screen name="Home" component={Home} options={
                    {headerTitle:()=><Button title="left"></Button>,
                    headerRight:()=><Input/>
                    }
                }></Stack.Screen>
                <Stack.Screen name="Log" component={Log}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Input=()=>{
    return(
    // <Button title="right"></Button>
    <TextInput placeholder="Search"></TextInput>
    )
}

const styles=StyleSheet.create({
    Box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Layoutbutton