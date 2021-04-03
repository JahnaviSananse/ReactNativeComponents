import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Async_login from './Async_login';
import Async_signup from './Async_signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login_nav">
        <Stack.Screen name="Async_login" component={Async_login} />
        <Stack.Screen name="Async_signup" component={Async_signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;