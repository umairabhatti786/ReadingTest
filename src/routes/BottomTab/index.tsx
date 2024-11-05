import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/main/HomeScreen';
import SubscriptionScreen from '../../screens/main/SubscriptionScreen';
import ProfileScreen from '../../screens/main/ProfileScreen';
import ChatsScreen from '../../screens/main/ChatsScreen';
import MatchScreen from '../../screens/main/MatchScreen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../components/Colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent;

          switch (route.name) {
            case 'HomeScreen':
              IconComponent = Octicons;
              iconName = 'home';
              break;
            case 'SubscriptionScreen':
              IconComponent = Ionicons;
              iconName = 'pricetag-outline';
              break;
            case 'MatchScreen':
              IconComponent = Octicons;
              iconName = 'heart';
              break;
            case 'ChatsScreen':
              IconComponent = Ionicons;
              iconName = 'chatbubble-ellipses-outline';
              break;
            case 'ProfileScreen':
              IconComponent = FontAwesome5;
              iconName = 'user';
              break;
            default:
              return null;
          }

          // Return the icon component with dynamic color
          return (
            <IconComponent
              name={iconName}
              size={size}
              color={focused ? Colors.orange : Colors.inactiveTabColor}
            />
          );
        },
        tabBarActiveTintColor: Colors.orange, // Active color
        tabBarInactiveTintColor: '#9E9E9E', // Inactive color
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="MatchScreen"
        component={MatchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
