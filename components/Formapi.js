import React,{useState,useEffect}from "react"
import {Text,View,TextInput,StyleSheet,Button} from "react-native"
import { useFormik } from "formik"

const Formapi=()=>{
    const [data,setdata]=useState({name:null,email:null,pass:null,conpass:null})
    const [error,seterror]=useState({name:false,email:false,pass:false,conpass:false})

    const getApi=async ()=>{

        if(data.name==null && data.email==null && data.pass==null && data.conpass==null){
            alert("Plese Enter Information")
        }
        else{
            const users={
                name:data.name,
                email:data.email,
                pass:data.pass,
                conpass:data.conpass
            }
            if(users.pass==users.conpass){
                const url="http://10.0.2.2:3000/users"
                let res=await fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(users)
            })
            res=await res.json();
            setdata({name:null,email:null,pass:null,conpass:null})
            alert("Signup Success ! ")
            }
            else{
                alert("Password Mismatch")
            }
        } 
    }

    const errorsub=()=>{
        if(data.name==null){
            seterror({name:true})
        }
        else{
            seterror({name:false})
        }

        if(data.email==null){
            seterror({email:true})
        }
        else{
            seterror({email:false})
        }

        if(data.pass==null){
            seterror({pass:true})
        }
        else{
            seterror({pass:false})
        }

        if(data.conpass==null){
            seterror({conpass:true})
        }
        else{
            seterror({conpass:false})
        }

        if(data.name==null && data.email==null && data.pass==null && data.conpass==null){
            seterror({name:true,email:true,pass:true,conpass:true})
            alert("Plese Enter Information")
        }
    }

    const sub=()=>{
        getApi();
        errorsub();
    }

    // const Formik = useFormik()

    // console.warn(data)

    // useEffect(()=>{
    //     getApi();
    // },[])
    // useEffect(()=>{
    //     errorsub();
    // },[error])
    return(
        <View style={{marginTop:50,marginLeft:10,marginRight:10}}>
        <Text style={{fontSize:25, alignSelf:"center",marginBottom:20}}>SIGN UP</Text>
            <TextInput style={styles.Box} placeholder="Username" onChangeText={(text)=>setdata(prev=>({...prev,name:text}))} value={data.name}></TextInput>
            {
                error.name ? <Text style={styles.Validation}>Invalid Username</Text> : null
            }
            <TextInput style={styles.Box} placeholder="Email" onChangeText={(text)=>setdata(prev=>({...prev,email:text}))} value={data.email}></TextInput>
            {
                error.email ? <Text style={styles.Validation}>Invalid Email</Text> : null
            }
            <TextInput style={styles.Box} placeholder="Password" onChangeText={(text)=>setdata(prev=>({...prev,pass:text}))} value={data.pass} secureTextEntry={true}></TextInput>
            {
                error.pass ? <Text style={styles.Validation}>Invalid Password</Text> : null
            }
            <TextInput style={styles.Box} placeholder="Confirm Password" onChangeText={(text)=>setdata(prev=>({...prev,conpass:text}))} value={data.conpass} secureTextEntry={true}></TextInput>
            {
                error.conpass ? <Text style={styles.Validation}>Invalid Confirm Password</Text> : null

            }
            <View style={{marginTop:20}}>
                <Button title="Submit" onPress={sub}></Button>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    Box:{
        fontSize:30,
        marginBottom:10,
        marginTop:10,
        borderWidth:1,
        borderColor:"lightblue",
        borderRadius:10,
        shadowColor:"black",
        // shadowOpacity:10,
        // elevation:1
    },
    Validation:{
        color:"red",
        marginTop:-5,
        fontSize:16
    }
})
export default Formapi;