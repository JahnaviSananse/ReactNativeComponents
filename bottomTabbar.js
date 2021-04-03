import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import { BottomTabBar } from '@react-navigation/bottom-tabs';

const BottomTabBar = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'grey'}} />
  );
};
const Search = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'blue'}} />
  );
};
const Browse = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'yellow'}} />
  );
};
const MyMusic = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'red'}} />
  );
};
const Tabbar =  createMaterialBottomTabNavigator({
  BottomTabBar: {
    screen: BottomTabBar,
    navigationOptions: {
      tabBarLabel: 'Home',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./home.png')} />
      ),
    },
  },

  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./loupe.png')} />
      ),
    },
  },

  Browse: {
    screen: Browse,
    navigationOptions: {
      tabBarLabel: 'Browse',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./safari.png')} />
      ),
    },
  },

  MyMusic: {
    screen: MyMusic,
    navigationOptions: {
      tabBarLabel: 'My Music',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./user.png')} />
      ),
    },
  },
});


export default createAppContainer(Tabbar);

const styles = StyleSheet.create({
 
  icon: {
    width: 20,
    height: 20,

    //alignSelf: 'center',
    //marginRight: 30,
    //marginLeft: 10,
  },
});


