import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import { BottomTabBar } from '@react-navigation/bottom-tabs';
import tabLoupe from './tabLoupe';
import tabSafari from './tabSafari';
import tabUser from './tabUser';

const tabHome = () => {
  return (
    <View style={styles.home} />
  );
};
const TabNavigator = createMaterialBottomTabNavigator({
  third: {
    screen: tabHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      activeColor: 'black',
      inactiveColor: 'gray',
      barStyle: {backgroundColor: 'lightgray'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./home.png')} />
      ),
    },
  },

  tabLoupe: {
    screen: tabLoupe,
    navigationOptions: {
      tabBarLabel: 'Search',
      activeColor: 'black',
      inactiveColor: 'gray',
      barStyle: {backgroundColor: 'lightgray'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./loupe.png')} />
      ),
    },
  },

  tabSafari: {
    screen: tabSafari,
    navigationOptions: {
      tabBarLabel: 'Browse',
      activeColor: 'black',
      inactiveColor: 'gray',
      barStyle: {backgroundColor: 'lightgray'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./safari.png')} />
      ),
    },
  },

  tabUser: {
    screen: tabUser,
    navigationOptions: {
      tabBarLabel: 'My Music',
      activeColor: 'black',
      inactiveColor: 'gray',
      barStyle: {backgroundColor: 'lightgray'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={require('./user.png')} />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  home:{
    width: '100%', 
    height: '100%', 
    backgroundColor: 'grey'
  }
});

// const SettingStack = createStackNavigator();
// function SettingComponent() {
//    return (
//      <Text> hello </Text>,
//       <SettingStack.Navigator
//          initialRouteName="tabHome"
//          screenOptions={{
//             headerShown: false,
//          }}
//          headerMode={"screen"}
//       >
//          <SettingStack.Screen
//             name="tabHome"
//             component={tabHome}
//             options={({ route }) => {
//                return {
//                   headerBackTitle: "",
//                   headerTitle: "tabHome",
//                };
//             }}
//          />
//          <SettingStack.Screen
//             name="tabLoupe"
//             component={tabLoupe}
//             options={({ route }) => {
//                return {
//                   headerBackTitle: "",
//                   headerTitle: "Fourth",
//                };
//             }}
//          />
//          <SettingStack.Screen
//             name="tabSafari"
//             component={tabSafari}
//             options={({ route }) => {
//                return {
//                   headerBackTitle: "",
//                   headerTitle: "tabSafari",
//                };
//             }}
//          />
//          <SettingStack.Screen
//             name="tabUser"
//             component={tabUser}
//             options={({ route }) => {
//                return {
//                   headerBackTitle: "",
//                   headerTitle: "tabUser",
//                };
//             }}
//          />

//       </SettingStack.Navigator>
//    );
// }

// const Tab = createBottomTabNavigator();

// export const App = () => {
//   alert('demo')

//   return (

//      <Text> hi </Text>,
//       <Tab.Navigator
//          initialRouteName="tabHome"
//          tabBarOptions={{
//             activeTintColor: "#4FB263",
//             inactiveTintColor: "#8D8E90",
//             style: {
//                borderTopRightRadius: 5,
//                borderTopLeftRadius: 5,
//                height: CONSTANT.IS_IPHONEX ? 100 : 70,
//                backgroundColor: "#1F2428",
//             },
//             labelPosition: "below-icon",
//             labelStyle: {
//                fontFamily: "Arial",
//                fontWeight: "bold",
//                fontSize: 12,
//                // paddingTop: 5,
//                paddingBottom: 8,
//                textAlign: "center",
//             },
//          }}
//       >

//           <Tab.Screen
//             name="Settings"
//             component={SettingComponent}
//             options={({ route }) => ({
//                tabBarLabel: "Settings",
//                tabBarVisible: getTabBarVisible(route),
//                tabBarIcon: ({ color, size, focused }) => (
//                   <Image
//                      source={
//                         focused
//                            ? IMAGES.IC_TAB_SETTING_SELECTED
//                            : IMAGES.IC_TAB_SETTING
//                      }
//                      resizeMode={"contain"}
//                      style={{ height: 25, width: 25 }}
//                   />
//                ),
//             })}
//          />

//       </Tab.Navigator>
//    );
// };
