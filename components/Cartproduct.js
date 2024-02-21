import React, { useEffect,useState } from 'react';
import {Text, View, Button, ScrollView, StyleSheet, Image} from 'react-native';
import { addToCart } from './Redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart } from './Redux/action';

const Cartheader = props => {
  const [isAdded,setisAdded]=useState(false)
    const item=props.item
    const dispatch = useDispatch()

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }

    const handleRemoveCart=(item)=>{
        dispatch(removeFromCart(item.name))
    }

    const cartItems=useSelector((state)=>state.cartReducer)
    useEffect(()=>{
      let result=cartItems.filter((cart)=>{
        return cart.name===item.name
      })
      if(result.length){
        setisAdded(true)
      }
      else{
        setisAdded(false)
      }
    })

  return (
    <View style={styles.container} key={item.id}>
      <Image
        style={{height: 200, width: 200}}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/011/047/536/small_2x/smartphone-and-mobile-phone-free-png.png',
        }}></Image>
      <View>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{fontSize: 20}}>{item.color}</Text>
        <Text style={{fontSize: 20, marginBottom: 30}}>{item.price}</Text>
        {
          isAdded ?<Button title="Remove to cart" onPress={()=>handleRemoveCart(item)}></Button> : <Button title="Add to cart" onPress={()=>handleAddToCart(item)}></Button>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    padding: 10,
  },
});
export default Cartheader;
