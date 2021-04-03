import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
//import ThirdPage from './ThirdPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        {/* <Stack.Screen name="ThirdPage" component={ThirdPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;