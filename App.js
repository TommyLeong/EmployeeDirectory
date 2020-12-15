/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainScreen from './Src/Containers/MainScreen';
import MainStackNavigator from './Src/Navigators/MainStackNavigator'

const App = () => {
  return(
      <MainStackNavigator>
        <MainScreen/>
      </MainStackNavigator>
  )
}

export default App;