import { View, Text } from 'react-native'
import React from 'react'
import LoginPage from './src/pages/loginPage';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/pages/homePage';
import SignupPage from './src/pages/signupPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;
