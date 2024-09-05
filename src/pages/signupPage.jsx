import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, Image, PermissionsAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import { launchImageLibrary } from 'react-native-image-picker';

const SignupPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Storage permission is required to upload profile photo');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  
  useEffect(() => {
    requestStoragePermission();
  }, []);

 
  const handleSignup = () => {
    if (!email || !password || !name) {
      Alert.alert('Please fill all fields');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User registered successfully!');
        navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };


  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          Alert.alert('Image Picker Error', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          console.log('Image URI: ', response.assets[0].uri);  
          setProfilePhoto(response.assets[0].uri);
        } else {
          Alert.alert('Unknown error occurred while selecting image');
        }
      }
    );
  };

  return (
    <View>

        {/* <View style={styles.Maincontainer1}>
          <Image
            style={styles.Mainphoto}
            source={require('../assets/mainPhoto.png')}
          />
        </View>  */}

        <View style={styles.Maincontainer2}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              style={styles.profilePhoto}
              source={profilePhoto ? { uri: profilePhoto } : require('../assets/manith.jpg')} 
            />
            <Text style={styles.uploadPhotoText}>Upload Profile Photo</Text>
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Sign Up</Text>

            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Name"
              placeholderTextColor="#888"
              autoCapitalize="words"
            />

            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.signupButtonContainer} onPress={handleSignup}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer1:{
    marginTop:30,
    zIndex:10
  },
  Maincontainer2:{
    marginTop:50,
    zIndex:10
  },

  container: {
    marginTop:30,
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  // Mainphoto: {
  //   width: '100%',
  //   height: "70%",
  //   // marginBottom: 20,
  //   // borderBottomLeftRadius: 30,
  //   // borderBottomRightRadius: 30,
  //   // resizeMode: 'cover',
  //   zIndex:2
  // },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#065F9E',
    alignSelf: 'center',
    marginTop: 20,
  },
  uploadPhotoText: {
    textAlign: 'center',
    color: '#065F9E',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#065F9E',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#065F9E',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  signupButtonContainer: {
    backgroundColor: '#065F9E',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '40%',
    alignItems: 'center',
    alignSelf:'center'
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SignupPage;
