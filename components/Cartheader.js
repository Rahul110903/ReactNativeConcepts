import React, { useEffect, useState } from 'react';
import {Text, View, Image, StyleSheet, Button,ScrollView} from 'react-native';
import Cartproduct from "./Cartproduct"
import { useSelector } from 'react-redux';

const Cartheader = ({navigation}) => {
  const [cartitems,setcartitems]=useState([])
  const phone = [
    {
      id:1,
      name: 'Nokia Mobile',
      color: 'black',
      price: 20000,
    },
    {
      id:2,
      name: 'Samsung Mobile',
      color: 'White',
      price: 10000,
    },
    {
      id:3,
      name: 'Iphone',
      color: 'green',
      price: 120000,
    },
  ];

  const cartData=useSelector((state)=>state.cartReducer)

  useEffect(()=>{
    setcartitems(cartData.length)
  },[cartData])

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, alignSelf: 'flex-end', color:"blue",marginTop:10}}>Add to Cart :- {cartitems}</Text>
      <Text
        style={{
          fontSize: 30,
          margin: 15,
          backgroundColor: 'orange',
          color: 'black',
        }}>
        UI for add to cart with Redux
      </Text>
      <Button title="to go to userlist" onPress={()=>navigation.navigate("UserList")}></Button>
      <ScrollView>
        {phone.map(item => <Cartproduct item={item}/>)}
      </ScrollView>
    </View>
  );
};

export default Cartheader;
