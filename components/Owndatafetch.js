import React, { useEffect,useState } from "react"
import {Text,View,} from "react-native"

const Owndatafetch=()=>{
    const [res,setres]=useState([])
    
    const getApiData= async ()=>{
        const data = "http://10.0.2.2:3000/users"
        let users = await fetch(data)
        users= await users.json();
        setres(users);
    }

    useEffect(()=>{
        getApiData();
    },[])
    return(
        <View>
        <Text style={{fontSize:35,marginBottom:25}}>Fetching Own Data using API</Text>
            {
                res.map((element,index)=>{
                    return( <View key={element.id}>
                        <Text style={{fontSize:20,marginBottom:10}}>{element.name}</Text>
                        <Text style={{fontSize:20,marginBottom:10}}>{element.email}</Text>
                        </View>
                        )
                        
                })
            }
        </View>
    )
}
export default Owndatafetch