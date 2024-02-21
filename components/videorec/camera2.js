import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const VideoRecorder = () => {
  const cameraRef = useRef(null);

  const startRecording = async () => {
    if (cameraRef.current) {
      const options = { quality: RNCamera.Constants.VideoQuality["720p"] };
      const data = await cameraRef.current.recordAsync(options);
      console.log(data.uri, "react native");
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
      console.log("react1",cameraRef.current);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
      />
      <TouchableOpacity onPress={startRecording}>
        <Text>Start Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopRecording}>
        <Text>Stop Recording</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoRecorder;
