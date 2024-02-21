import React,{useState,useEffect} from "react"
import {Text,View,TextInput} from "react-native"

const SearchApi=()=>{
    const [data,setdata]=useState("")
    const [user,setuser]=useState([])
    
    const getApi=async ()=>{
        const url=`http://192.168.1.10:3000/users/?q=${data}`
        let res=await fetch(url)
        res= await res.json();
        setuser(res)
    }
    console.log(user)
    useEffect(()=>{
        getApi();
    },[data])
    console.warn(user)
    return(
        <View>
            <Text style={{fontSize:30, alignSelf:"center"}}>Search any Data</Text>
            <TextInput placeholder="Seach any Data" style={{fontSize:25,alignSelf:"center",borderWidth:1,marginTop:20,borderColor:"skyblue",borderRadius:10}} value={data} onChangeText={(text)=>setdata(text)}></TextInput>
            {
                user.map((element)=>{
                   return(
                    <View style={{flexDirection:"row",justifyContent:"space-around", margin:10}}>
                        <Text style={{fontSize:15}}>{element.name}</Text>
                        <Text style={{fontSize:15}}>{element.email}</Text>
                        <Text style={{fontSize:15}}>{element.pass}</Text>
                    </View>
                   ) 
                })
            }
        </View>
    )
}
export default SearchApi