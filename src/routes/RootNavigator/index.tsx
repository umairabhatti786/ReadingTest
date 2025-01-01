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
import PaymentScreen2 from "../../screens/main/PaymentScreen2";
import RequestBookScreen from "../../screens/main/RequestBookScreen";
import PersonalInfoScreen from "../../screens/main/PersonalInfoScreen";
import BookDetails from "../../screens/main/BookDetails";
import Profile from "../../screens/main/Profile";
import ForgotPasswordScreen from "../../screens/main/ForgotPasswordScreen";
import ChangePasswordScreen from "../../screens/main/ChangePasswordScreen";
import EditPersonalInfo from "../../screens/main/EditPersonalInfo";
import Filters from "../../screens/main/Filters";
import About from "../../screens/main/About";
import Terms from "../../screens/main/Terms";
import PrivacyPolicy from "../../screens/main/PrivacyPolicy";
import HelpNSupport from "../../screens/main/HelpNSupport";
import CardDiscounts from "../../screens/main/CardDiscounts";
import SubCategories from "../../screens/main/SubCategories";
import AllSubCategories from "../../screens/main/AllSubCategories";
import Checkout from "../../screens/main/Checkout";
import ChoosePaymentMethod from "../../screens/main/ChoosePaymentMethod";

export type RootStackParamsList = {
  SignUpScreen: any;
  LoginScreen: any;
  BottomTab: any;
  SendGiftCardScreen: any;
  ChooseAddress: any;
  NewAddress: any;
  PersonalInfoScreen: any;
  PaymentScreen: any;
  PaymentScreen2: any;
  RequestBookScreen: any;
  BookDetails: any;
  ForgotPasswordScreen: any;
  Profile: any;
  ChangePasswordScreen: any;
  EditPersonalInfo: any;
  Filters: any;
  About: any;
  Terms: any;
  PrivacyPolicy: any;
  HelpNSupport: any;
  CardDiscounts: any;
  SubCategories: any;
  AllSubCategories: any;
  Checkout: any;
  ChoosePaymentMethod: any;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_left" }}
      >
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="HelpNSupport" component={HelpNSupport} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen
          name="ChoosePaymentMethod"
          component={ChoosePaymentMethod}
        />
        <Stack.Screen name="AllSubCategories" component={AllSubCategories} />
        <Stack.Screen name="SubCategories" component={SubCategories} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="SendGiftCardScreen"
          component={SendGiftCardScreen}
        />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="CardDiscounts" component={CardDiscounts} />
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="PaymentScreen2" component={PaymentScreen2} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditPersonalInfo" component={EditPersonalInfo} />
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
