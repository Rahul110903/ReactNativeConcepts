import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera,useCameraDevice } from 'react-native-vision-camera';
import Video from "react-native-video"



const Video1 = () => {
    const cameraRef = useRef(null);
    const device = useCameraDevice('back')
    const [cameraPermission,setcameraPermission]=useState(false)
    const [videoPath,setVideoPath]=useState("")
    
    // console.log(cameraPermission,"camerapermission")

  
    useEffect(()=>{
        (async ()=>{
            const cameraPermissionStatus = await Camera.requestCameraPermission();
            setcameraPermission(cameraPermissionStatus);
        }
            )();
    },[])


    const handleRecordVideo = async ()=>{
      if(cameraRef.current){
        try {
          await cameraRef.current.startRecording({
              flash: 'off',
              onRecordingFinished:(data)=>{
                setVideoPath(data.video);
              },
              onRecordingError:(error)=>{
                console.error("Recording Error",error)
              }
              })
      } catch(e){
          console.log("Error starting video Recording",e)
      }
      }
        
    }
    

    const handleStopVideo =async ()=>{
      if(cameraRef.current){
        try{
          await cameraRef.current.stopRecording();
      } catch(e){
          console.log("Error stoping video recording",e)
      }
  }
      }
        

    const renderRecordingVideo =()=>{
        return (
            <View>
                <Camera
                    ref={cameraRef}
                    style={[styles.camera,styles.photoAndVideoCamera]}
                    device={device}
                    isActive={true}
                    video={true}
                />
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.btn} onPress={handleRecordVideo}> 
                        <Text style={styles.btnText}>Record Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={handleStopVideo}> 
                        <Text style={styles.btnText}>Stop Video</Text>
                    </TouchableOpacity>
                </View>
                {
                    videoPath ? (
                        <Video source={{ uri: videoPath }} style={styles.video} controls />
                    ) : null
                }
            </View>
        )
    }

    const renderContent =()=>{
        if(device==null){
            return <ActivityIndicator size="large" color="green"/>
        }
        if (cameraPermission!=="granted"){
            return null;
        }
        return renderRecordingVideo();
        
    }


  return (
    <View style={styles.screen}>
        <SafeAreaView style={styles.saveArea}>
            <View style={styles.header}>
                <Text style={styles.headerText}>React Native Camera</Text>
            </View>
        </SafeAreaView>

        <View style={styles.caption}>
            <Text style={styles.captionText}>React Native </Text>
        </View>

        {renderContent()}
    </View>
  )
}

export default Video1


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#EEF2E6',
    },
    saveArea: {
      backgroundColor: '#3D8361',
    },
    header: {
      height: 50,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#ffffff',
      fontSize: 20,
    },
    caption: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    captionText: {
      color: '#100F0F',
      fontSize: 16,
      fontWeight: '600',
    },
    camera: {
      height: 460,
      width: '92%',
      alignSelf: 'center',
    },
    photoAndVideoCamera: {
      height: 360,
    },
    barcodeText: {
      paddingHorizontal: 16,
      paddingVertical: 20,
      textAlign: 'center',
      color: '#100F0F',
      fontSize: 24,
    },
    pickerSelect: {
      paddingVertical: 12,
    },
    image: {
      marginHorizontal: 16,
      paddingTop: 8,
      width: 80,
      height: 80,
    },
    dropdownPickerWrapper: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      zIndex: 9,
    },
    btnGroup: {
      margin: 16,
      flexDirection: 'row',
    },
    btn: {
      backgroundColor: '#63995f',
      margin: 13,
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 8,
    },
    btnText: {
      color: '#ffffff',
      fontSize: 20,
      textAlign: 'center',
    },
    video: {
      marginHorizontal: 16,
      height: 100,
      width: 80,
      position: 'absolute',
      right: 0,
      bottom: -80,
    },
  });