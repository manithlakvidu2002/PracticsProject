import { View, Text, Image, StyleSheet, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Fill all the fields!');
      return;
    }

    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Wrong password!');
        } else {
          Alert.alert(error.message);
        }
      });
  };

  return (
    <View>
      <Image style={styles.Mainphoto} source={require('../assets/mainPhoto.png')} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Login</Text>

        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loggingButtonContainer} onPress={handleLogin}>
          <Text style={styles.loggingButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Forgot Password!')}>
          <Text style={styles.forgetPassword}>I forgot my password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerPassword}>Register as a New User</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  Mainphoto: {
    width: '100%',
    height: '40%',
    marginBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    resizeMode: 'cover',
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
  loggingButtonContainer: {
    backgroundColor: '#065F9E',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  loggingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  forgetPassword: {
    textAlign: 'center',
    color: '#065F9E',
    marginTop: 15,
    fontSize: 14,
  },
  registerPassword: {
    textAlign: 'center',
    color: '#065F9E',
    marginTop: '20%',
    fontSize: 14,
  },
});

export default LoginPage;