import React from "react"
import {Text,View} from "react-native"
import { PropsWithChildren } from "react"
import Icon from "react-native-vector-icons/FontAwesome"

const Icons=({name})=>{
    return(
        <View>
            <Icon name="circle-thin" size={40} color="blue"></Icon>
        </View>
    )
}
export default Icons