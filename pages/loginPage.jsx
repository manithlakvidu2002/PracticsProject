import { View, Text, Image, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.Mainphoto}
        source={require('../assets/mainPhoto.png')}
      />
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loggingButtonContainer} onPress={() => Alert.alert("Logged in Successfully!")}>
        <Text style={styles.loggingButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert("Forgot Password!")}>
        <Text style={styles.forgetPassword}>I forgot my password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert("Register!")}>
        <Text style={styles.registerPassword}>Register for New User</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: 'white',
  // },
  Mainphoto: {
    width: '100%',
    height: '50%',
    marginBottom: '5%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#065F9E",
    marginBottom: '5%',
    paddingLeft:"3%"
  },
  input: {
    height: 45,
    borderColor: '#065F9E',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginVertical: '2%',
    width: '88%',
    alignSelf: 'center',
    fontSize: 16,
  },
  loggingButtonContainer: {
    backgroundColor: "#065F9E",
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: '5%',
    width: '30%',
    alignSelf: 'center', 
    alignItems: 'center',
  },
  loggingButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgetPassword: {
    textAlign: 'center',
    color: "#065F9E",
    marginTop: '3%',
    marginBottom:"10%",
    fontSize: 14,
  },
  registerPassword: {
    textAlign: 'center',
    color: "#065F9E",
    paddingTop: '10%',
    fontSize: 14,
  },
});

export default LoginPage;
