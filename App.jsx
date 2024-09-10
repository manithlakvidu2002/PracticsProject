import { View, Text } from 'react-native';
import React from 'react';
import LoginPage from './src/pages/loginPage';
import SignupPage from './src/pages/signupPage';
import HomePage from './src/pages/homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListPage from './src/pages/userListPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginPage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomePage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="UserListPage"
          component={UserListPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

export default App;
