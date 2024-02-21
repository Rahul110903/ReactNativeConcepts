import React,{useRef} from "react"
import {Text,View,TextInput,Button} from "react-native"

const Ref=()=>{

    const input = useRef();

    const updatedmouse=()=>{
        input.current.focus();  // in this it focuses on that part and remove whatever you have written
        input.current.setNativeProps({
            fontSize:50,
            color:"green"
        })
    }

    return(
        <View>
            <Text style={{fontSize:40}}>Using Ref</Text>
            <TextInput ref={input} placeholder="Enter Name" style={{fontSize:25,borderColor:"skyblue",borderWidth:2,margin:5}}></TextInput>
            <TextInput placeholder="Enter Email" style={{fontSize:25,borderColor:"skyblue",borderWidth:2,margin:5}}></TextInput>
            <Button title="Updated" onPress={updatedmouse}></Button>
        </View>
    )
}
export default Ref