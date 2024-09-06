import { View, Text } from 'react-native'
import React from 'react'
import LoginPage from './src/pages/loginPage'
import StatusScreen from './src/pages/statusScreen'

const App = () => {
  return (
    <View>
      {/* <LoginPage/> */}
      <StatusScreen/>
    </View>
  )
}

export default App