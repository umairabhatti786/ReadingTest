import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "../../screens/auth/SignUpScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import BottomTab from "../BottomTab";
import SendGiftCardScreen from "../../screens/main/SendGiftCardScreen";
import ChooseAddress from "../../screens/main/ChooseAddress";
import NewAddress from "../../screens/main/NewAddress";
import PersonalInfoScreen from "../../screens/main/PersonalInfoScreen";
import PaymentScreen from "../../screens/main/PaymentScreen";
export type RootStackParamsList = {
  SignUpScreen: any;
  LoginScreen: any;
  BottomTab: any;
  SendGiftCardScreen: any;
  ChooseAddress: any;
  NewAddress: any;
  PersonalInfoScreen: any;
  PaymentScreen: any;
};
const Stack = createNativeStackNavigator<RootStackParamsList>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen
          name="SendGiftCardScreen"
          component={SendGiftCardScreen}
        />
        <Stack.Screen name="ChooseAddress" component={ChooseAddress} />
        <Stack.Screen name="NewAddress" component={NewAddress} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
