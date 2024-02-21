import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layoutbutton from './components/Layoutbutton';
import Bottomnav from './components/Bottomnav';
import Topnav from './components/Topnav';
import Fetching from "./components/Fetching"
import FlatListapi from './components/FlatListapi';
import Owndatafetch from './components/Owndatafetch';
import Postapi from './components/Postapi';
import Formapi from './components/Formapi';
import Form from "./components/Form"
import Database from './components/Database';
import SearchApi from './components/SearchAPi';
import Ref from './components/Ref';
import LocalStorage from './components/LocalStorage';
import Cartheader from './components/Cartheader';
import CameraScreen from './components/videorec/camera';
import VideoRecorder from './components/videorec/camera2';
import VideoSession from './components/videorec/videosession1';
import Video1 from './components/videorec/Video1';
import Video2 from './components/videorec/Video2';
import Maincart from './components/Maincart';


function App() {
  return (
    // <Layoutbutton/>
    // <Bottomnav/>
    // <Topnav/>
    // <Fetching/>
    // <FlatListapi/>
    // <Owndatafetch/>
    // <Postapi/>
    // <Formapi/>
    // <Form/>
    // <Database/>
    // <SearchApi/>
    // <Ref/>
    // <LocalStorage/>
    <Cartheader/>
    // <CameraScreen/>
    // <VideoRecorder/>
    // <VideoSession/>
    // <Video1/>
    // <Video2/>
    // <Maincart/>
  
  );
}

export default App;
