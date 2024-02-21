import React, { useEffect,useState } from "react"
import {Text,View,} from "react-native"

const Fetching=()=>{
    const [res,setres]=useState([])
    
    const getApiData= async ()=>{
        const data = "https://jsonplaceholder.typicode.com/users"
        let users = await fetch(data)
        users= await users.json()
        setres(users)
    }

    useEffect(()=>{
        getApiData();
    },[])
    return(
        <View>
        <Text style={{fontSize:35,marginBottom:30}}>Fetching Data using API</Text>
            {
                res.map((element,index)=>{
                    return( <View key={element.id}>
                        <Text style={{fontSize:20,marginBottom:10}}>{element.username}</Text>
                        </View>
                        )
                        
                })
            }
        </View>
    )
}
export default Fetching