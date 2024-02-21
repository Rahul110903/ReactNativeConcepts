import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { Camera, FileSystem, Permissions } from 'react-native-vision-camera';
import Video from 'react-native-video';

const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoPath, setVideoPath] = useState('');
  const [cameraDevice, setCameraDevice] = useState(null); // Add state for camera device
  const cameraRef = useRef();

  useEffect(() => {
    // Fetch the available camera devices and select one
    const setupCamera = async () => {
      const availableCameraDevices = await Camera.getAvailableCameraDevices();
      if (availableCameraDevices.length > 0) {
        setCameraDevice(availableCameraDevices[0]); // You can select a different camera if needed
      }
    };

    setupCamera();
  }, []);

  const startRecording = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    setIsRecording(true);

    const videoPath = `${FileSystem.cacheDirectory}/video.mp4`;
    setVideoPath(videoPath);

    cameraRef.current.startRecording({
      quality: '720p',
      videoBitrate: 2000000,
      maxDuration: 10,
      maxFileSize: 100 * 1024 * 1024,
      outputPath: videoPath,
      device: cameraDevice, // Set the selected camera device
    });
  };

  const stopRecording = async () => {
    setIsRecording(false);
    await cameraRef.current.stopRecording();
  };

  const requestCameraPermission = async () => {
    // Your permission request logic remains the same
    // ...

    return (
      status[Permissions.PERMISSIONS.ANDROID.CAMERA] === 'granted' &&
      status[Permissions.PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted' &&
      status[Permissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'granted'
    );
  };

  return (
    <View style={styles.container}>
      {cameraDevice && (
        <Camera
          style={styles.camera}
          ref={cameraRef}
          device={cameraDevice}
        />
      )}

      {isRecording ? (
        <TouchableOpacity style={styles.recordButton} onPress={stopRecording}>
          <Text style={styles.recordButtonText}>Stop Recording</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.recordButton} onPress={startRecording}>
          <Text style={styles.recordButtonText}>Start Recording</Text>
        </TouchableOpacity>
      )}

      {videoPath !== '' && (
        <View style={styles.videoPlayer}>
          <Video source={{ uri: videoPath }} style={styles.videoPlayer} controls />
        </View>
      )}
    </View>
  );
};

// Your styles and export remain the same


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  camera: {
    flex: 1,
  },
  recordButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center',
  },
  recordButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  videoPlayer: {
    flex: 1,
    marginTop: 20,
  },
});

export default CameraScreen;