import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/main/Home";
import CategoriesScreen from "../../screens/main/Categories";
import OrdersScreen from "../../screens/main/Orders";
import CartScreen from "../../screens/main/Cart";
import LikedScreen from "../../screens/main/Liked";

import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import { s, vs } from "react-native-size-matters";
import icons from "../../assets/icons";
import Categories from "../../screens/main/Categories";
import Orders from "../../screens/main/Orders";
import Cart from "../../screens/main/Cart";
import Liked from "../../screens/main/Liked";

export type BottomTabParams = {
  Home: any;
  Categories: any;
  Orders: any;
  Cart: any;
  Liked: any;
};
const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: vs(60),
          //height: 75,
          //paddingVertical: verticalScale(10),
        },
        tabBarLabelStyle: {
          fontSize: 10, // Font size for the label
          //marginTop: -5, // Adjust spacing if needed
          // color: focused ? "black" : "gray",
        },
        tabBarIconStyle: {
          alignItems: "center", // Center icon within its container
          justifyContent: "center",
        },
        tabBarItemStyle: {
          justifyContent: "center", // Center items within their tab
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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={icons.Home}
                style={[
                  styles.icon,
                  { tintColor: focused ? "black" : "gray" }, // Adjust focus color
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={icons.Categories}
                style={[
                  styles.icon,
                  { tintColor: focused ? "black" : "gray" }, // Adjust focus color
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={icons.Orders}
                style={[
                  styles.icon,
                  { tintColor: focused ? "black" : "gray" }, // Adjust focus color
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={icons.Cart}
                style={[
                  styles.icon,
                  { tintColor: focused ? "black" : "gray" }, // Adjust focus color
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={icons.Heart}
                style={[
                  styles.icon,
                  { tintColor: focused ? "black" : "gray" }, // Adjust focus color
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center", // Ensures icon is centered horizontally
    justifyContent: "center", // Ensures icon is centered vertically
    width: 40, // Adjust container width if needed
    height: 40, // Adjust container height if needed
  },
  icon: {
    height: vs(20),
    width: s(20),
    resizeMode: "contain",
  },
});
