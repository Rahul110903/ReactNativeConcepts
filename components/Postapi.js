import React ,{useEffect,useState} from "react"
import {Text,View,Button} from "react-native"

const Postapi=()=>{
    const users={
        name:"Abhishek",
        age:23,
        email:"Abhbishgek@gmial.com"
    }

    const getApi=async ()=>{
        const url="http://10.0.2.2:3000/users"
        let data= await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(users)
        })
        data=await data.json();
    }
    

    useEffect(()=>{
        getApi();
    },[])
    return(
        <View>
            <Text>Post API Call</Text>
            <Button title="Press Here" onPress={()=>getApi()}></Button>
        </View>
    )
}
export default Postapi