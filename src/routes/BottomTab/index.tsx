import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/main/HomeScreen";
import CategoriesScreen from "../../screens/main/CategoriesScreen";
import OrdersScreen from "../../screens/main/OrdersScreen";
import CartScreen from "../../screens/main/CartScreen";
import LikedScreen from "../../screens/main/LikedScreen";

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import icons from "../../assets/icons";

export type BottomTabParams = {
  HomeScreen: any;
  CategoriesScreen: any;
  OrdersScreen: any;
  CartScreen: any;
  LikedScreen: any;
};
const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: verticalScale(70),
          paddingVertical: verticalScale(10),
        },
      }}
      // screenOptions={({ route }) => ({
      //   headerShown: false, // Hide header on all screens
      //   tabBarStyle: {
      //     height: 70,
      //     paddingBottom: 10,
      //     paddingTop: 10,
      //   },
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     let IconComponent;

      //     switch (route.name) {
      //       case "HomeScreen":
      //         IconComponent = Octicons;
      //         iconName = "home";
      //         break;
      //       case "SubscriptionScreen":
      //         IconComponent = Ionicons;
      //         iconName = "pricetag-outline";
      //         break;
      //       case "MatchScreen":
      //         IconComponent = Octicons;
      //         iconName = "heart";
      //         break;
      //       case "ChatsScreen":
      //         IconComponent = Ionicons;
      //         iconName = "chatbubble-ellipses-outline";
      //         break;
      //       case "ProfileScreen":
      //         IconComponent = FontAwesome5;
      //         iconName = "user";
      //         break;
      //       default:
      //         return null;
      //     }

      //     // Return the icon component with dynamic color
      //     return (
      //       <IconComponent
      //         name={iconName}
      //         size={size}
      //         // color={focused ? Colors.orange : Colors.inactiveTabColor}
      //       />
      //     );
      //   },
      //   tabBarActiveTintColor: Colors.orange, // Active color
      //   tabBarInactiveTintColor: "#9E9E9E", // Inactive color
      // })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.Home}
              style={{ height: verticalScale(20), width: scale(20) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.Categories}
              style={{ height: verticalScale(20), width: scale(20) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.Orders}
              style={{ height: verticalScale(20), width: scale(20) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.Cart}
              style={{ height: verticalScale(20), width: scale(20) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LikedScreen"
        component={LikedScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.Heart}
              style={{ height: verticalScale(20), width: scale(20) }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
