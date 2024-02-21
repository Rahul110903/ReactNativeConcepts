import React, {useEffect , useState} from "react"
import {FlatList, ScrollView, Text,View} from "react-native"

const FlatListapi=()=>{
    const [resdata,setresdata]=useState([])

    const getApi= async ()=>{
        const url="https://jsonplaceholder.typicode.com/users"
        let users = await fetch(url)
        users= await users.json();
        setresdata(users);
    }

    useEffect(()=>{
        getApi();
    },[])

    console.log(resdata)

    return(
        <View>
            <Text style={{fontSize:30}}>Fetching API using FlatList</Text>
                <FlatList data={resdata} renderItem={({item})=><View>
                <Text style={{fontSize:40}}>{item.id}</Text>
                <Text style={{fontSize:30}}>{item.username}</Text>  
                </View>}></FlatList>
        </View>
    )
}

export default FlatListapi