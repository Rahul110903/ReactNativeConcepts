import React, { useState } from "react"
import {Text,View,TextInput,Button} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LocalStorage=()=>{
    const [user,setuser]=useState({name:"",pass:""})

    const setdata=async()=>{
        await AsyncStorage.setItem("name","Rahul")
    }

    const getdata=async()=>{
        const res= await AsyncStorage.getItem("name")
        console.warn(res)
    }
    const removedata=async()=>{
        await AsyncStorage.removeItem("name")
    }

    const userlogin=async()=>{
        const userData = { name: user.name, pass: user.pass };
        await AsyncStorage.setItem("userData",JSON.stringify(userData))
    }
    return(
        <View>
            <Text style={{alignSelf:"center", fontSize:20,margin:15}}>LOCAL STORAGE</Text>
            <TextInput placeholder="Enter Name" style={{fontSize:30,borderColor:"skyblue",borderWidth:1,margin:4}} value={user.name} onChangeText={(text)=>setuser(prev=>({...prev,name:text}))}></TextInput>
            <TextInput placeholder="Enter Password" style={{fontSize:30,borderColor:"skyblue",borderWidth:1,margin:4}} value={user.pass} onChangeText={(text)=>setuser(prev=>({...prev,pass:text}))}></TextInput>
            <Button title="Login" onPress={userlogin}></Button>

            <View style={{marginTop:20}}>
                <Button title="SET DATA" onPress={setdata}></Button>
                <Button title="GET DATA" onPress={getdata}></Button>
                <Button title="ROMOVE DATA" onPress={removedata}></Button>
            </View>

        </View>
    )
}
export default LocalStorage