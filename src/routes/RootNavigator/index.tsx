import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "../../screens/auth/SignUpScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import BottomTab from "../BottomTab";
import SendGiftCardScreen from "../../screens/main/SendGiftCardScreen";
import ChooseAddress from "../../screens/main/ChooseAddress";
import NewAddress from "../../screens/main/NewAddress";
import PaymentScreen from "../../screens/main/PaymentScreen";
import RequestBookScreen from "../../screens/main/RequestBookScreen";
import PersonalInfoScreen from "../../screens/main/PersonalInfoScreen";
import BookDetails from "../../screens/main/BookDetails";
import Profile from "../../screens/main/Profile";
import ForgotPasswordScreen from "../../screens/main/ForgotPasswordScreen";
import ChangePasswordScreen from "../../screens/main/ChangePasswordScreen";
export type RootStackParamsList = {
  SignUpScreen: any;
  LoginScreen: any;
  BottomTab: any;
  SendGiftCardScreen: any;
  ChooseAddress: any;
  NewAddress: any;
  PersonalInfoScreen: any;
  PaymentScreen: any;
  RequestBookScreen: any;
  BookDetails: any;
  ForgotPasswordScreen: any;
  Profile: any;
  ChangePasswordScreen: any;
};
const Stack = createNativeStackNavigator<RootStackParamsList>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen
          name="SendGiftCardScreen"
          component={SendGiftCardScreen}
        />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen name="RequestBookScreen" component={RequestBookScreen} />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />

        <Stack.Screen name="ChooseAddress" component={ChooseAddress} />
        <Stack.Screen name="NewAddress" component={NewAddress} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
