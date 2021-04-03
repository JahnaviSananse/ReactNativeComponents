import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Image from "src/components/Image";

import React, { useEffect } from "react";
import * as IMAGES from "src/assets/images";
import * as CONSTANT from "src/constants/constant";

import tabHome from "./tabHome";
import tabLoupe from "./tabLoupe";
import tabSafari from "./tabSafari";
import tabUser from "./tabUser";

function getTabBarVisible(route) {
   console.log("routeroute", route);
   if (route.state && route.state.index > 0) {
      return false;
   } else {
      return true;
   }
}

const SettingStack = createStackNavigator();
function SettingComponent() {
   return (
      <SettingStack.Navigator
         initialRouteName="tabHome"
         screenOptions={{
            headerShown: false,
         }}
         headerMode={"screen"}
      >
         <SettingStack.Screen
            name="tabHome"
            component={tabHome}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "tabHome",
               };
            }}
         />
         <SettingStack.Screen
            name="tabLoupe"
            component={tabLoupe}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "tabLoupe",
               };
            }}
         />
         <SettingStack.Screen
            name="tabSafari"
            component={tabSafari}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "tabSafari",
               };
            }}
         />
         <SettingStack.Screen
            name="tabUser"
            component={tabUser}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "tabUser",
               };
            }}
         />
      </SettingStack.Navigator>
   );
}

const Tab = createBottomTabNavigator();

export const App = () => {
   return (
      <Tab.Navigator
         initialRouteName="Feed"
         tabBarOptions={{
            activeTintColor: "#4FB263",
            inactiveTintColor: "#8D8E90",
            style: {
               borderTopRightRadius: 5,
               borderTopLeftRadius: 5,
               height: CONSTANT.IS_IPHONEX ? 100 : 70,
               backgroundColor: "#1F2428",
            },
            labelPosition: "below-icon",
            labelStyle: {
               fontFamily: "Arial",
               fontWeight: "bold",
               fontSize: 12,
               // paddingTop: 5,
               paddingBottom: 8,
               textAlign: "center",
            },
         }}
      >
         <Tab.Screen
            name="Settings"
            component={SettingComponent}
            options={({ route }) => ({
               tabBarLabel: "Settings",
               tabBarVisible: getTabBarVisible(route),
               tabBarIcon: ({ color, size, focused }) => (
                  <Image
                     source={
                        focused
                           ? IMAGES.IC_TAB_SETTING_SELECTED
                           : IMAGES.IC_TAB_SETTING
                     }
                     resizeMode={"contain"}
                     style={{ height: 25, width: 25 }}
                  />
               ),
            })}
         />
      </Tab.Navigator>
   );
};
