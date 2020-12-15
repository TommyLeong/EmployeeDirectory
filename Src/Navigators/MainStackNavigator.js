import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../Containers/MainScreen';
import ResultScreen from '../Containers/ResultScreen';

const Stack = createStackNavigator();

const AppFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="Directory App">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{headerShown: true, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return AppFlow();
};

export default MainStackNavigator;