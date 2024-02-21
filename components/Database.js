import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
  Modal,
  TextInput,
} from 'react-native';

const Database = () => {
  const [data, setdata] = useState([{name: '', email: '', pass: ''}]);
  const [diabox, setdiabox] = useState(false);
  const [diadata, setdiadata] = useState('');

  const getApi = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let res = await fetch(url);
    res = await res.json();
    setdata(res);
  };

  const deleteUser = async id => {
    const url1 = 'http://10.0.2.2:3000/users';
    console.warn(`${url1}/${id}`);
    let res1 = await fetch(`${url1}/${id}`, {
      method: 'delete',
    });
    res1 = await res1.json();
    if (res1) {
      console.warn('User Deleted');
      getApi();
    }
  };

  const userdetails = (name, pass,id,email) => {
    setdiabox(true);
    setdiadata({name: name, pass: pass,id: id,email:email});
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={styles.Box}>
      <View style={styles.Box1}>
        <Text style={{fontSize: 25, color: 'blue'}}> Users Database</Text>
      </View>
      <View style={styles.user}>
        <Text style={{flex: 1, color: '#f0f0f0', fontSize: 17}}>NAME</Text>
        <Text style={{flex: 1, color: '#f0f0f0', fontSize: 17}}>PASSWORD</Text>
        <Text style={{flex: 1, color: '#f0f0f0', fontSize: 17}}>
          UPDATE/DELETE
        </Text>
      </View>
      {data.map((element, index) => {
        return (
          <View style={styles.Box2} key={index}>
            <Text
              style={{flex: 1, fontSize: 17, color: '#e1e2e3', marginLeft: 10}}>
              {element.name}
            </Text>
            <Text style={{flex: 1, fontSize: 17, color: '#e1e2e3'}}>
              {element.pass}
            </Text>
            <Button
              title="UPDATE"
              onPress={() => userdetails(element.name, element.pass,element.id,element.email)}></Button>
            <View style={{marginLeft: 3}}>
              <Button
                title="DELETE"
                onPress={() => deleteUser(element.id)}></Button>
            </View>
          </View>
        );
      })}
      <Modal transparent={true} visible={diabox}>
        <Modals diadata={diadata} setdiabox={setdiabox} getApi={()=>getApi()} />
      </Modal>
    </View>
  );
};

const Modals = props => {
    const {name,pass,email,id}=props.diadata
    const [newdata,setnewdata]=useState({name:name,pass:pass,email:email})
    const printnewdata=async ()=>{
        const url='http://10.0.2.2:3000/users'
        let res= await fetch(`${url}/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name:newdata.name,email:newdata.email,pass:newdata.pass})
        })
        res=await res.json();
        if(res){
            console.warn(res)
            props.getApi();
            props.setdiabox(false)
        }
    }

  return (
    <View style={styles.updatebox}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 50,
          shadowColor: 'black',
          shadowOpacity: 1,
          elevation: 5,
          borderRadius: 10,
        }}>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 25,alignSelf:"center"}}>NAME :</Text>
            <TextInput style={{fontSize:20, borderWidth:1,borderRadius:5,borderColor:"#C7C7C7",marginLeft:20}} value={newdata.name} placeholder='Enter Name' onChangeText={(text)=>setnewdata(prev=>({...prev,name:text}))} ></TextInput>
        </View>

        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 25,alignSelf:"center"}}>EMAIL :</Text>
            <TextInput style={{fontSize:20, borderWidth:1,borderRadius:5,borderColor:"#C7C7C7",marginLeft:20}} value={newdata.email} placeholder='Enter Email' onChangeText={(text)=>setnewdata(prev=>({...prev,email:text}))} ></TextInput>
        </View>

        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 25,alignSelf:"center"}}>PASSWORD :</Text>
            <TextInput style={{fontSize:20, borderWidth:1,borderRadius:5,borderColor:"#C7C7C7",marginLeft:10}} value={newdata.pass} placeholder='Enter Password' onChangeText={(text)=>setnewdata(prev=>({...prev,pass:text}))} ></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Button title="Update" onPress={()=>printnewdata(newdata)}></Button>
          <Button title="Close" onPress={() => props.setdiabox(false)}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#496a81',
  },
  Box1: {
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  Box2: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    backgroundColor: '#4a5a82',
    padding: 8,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    marginBottom: 6,
  },
  updatebox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default Database;
