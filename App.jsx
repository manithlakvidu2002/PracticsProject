import { View, Text } from 'react-native'
import React from 'react'

import LoginPage from './src/pages/loginPage';
import HomePage from './src/pages/homePage';
import SignupPage from './src/pages/signupPage';


const App = () => {
  return (
    <View>
      {/* <LoginPage/> */}
      {/* <HomePage/> */}
      <SignupPage/>
    </View>
  )
}

export default App;



// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginPage from './src/pages/loginPage';
// import HomePage from './src/pages/homePage';
// import SignupPage from './src/pages/signupPage';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="Home" component={HomePage} />
//         <Stack.Screen name="Signup" component={SignupPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;