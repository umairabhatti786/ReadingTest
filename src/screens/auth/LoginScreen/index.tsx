import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
//import auth from '@react-native-firebase/auth';
import { Colors } from "../../../utils/Colors";
import CustomInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { emailReges } from "../../../utils/Reges";
import icons from "../../../assets/icons";
import Fonts from "../../../utils/Fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import SocialLogin from "../../../components/SocialLogin";
import CustomText from "../../../components/CustomText";
import Header from "../../../components/Header";
import CustomTextInput from "../../../components/CustomTextInput";
//import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import {GoogleSignin} from '@react-native-google-signin/google-signin';
//.............redux...................
//import {useDispatch} from 'react-redux';
//import {setUserData} from '../../../components/redux/Action';
// .............................Configure Google Sign-In
// GoogleSignin.configure({
//   webClientId:
//     '743868485620-fhnrut2ee0ng5k5nt8b0ij613o4in3ff.apps.googleusercontent.com',
// });
//.....................types.....................
interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "LoginScreen">;
}

//............................main func....................
const LoginScreen = ({ navigation }: LoginScreenProps) => {
  //const dispatch = useDispatch(); //....for redux..............

  // ................inputs............
  type inputs = {
    email: string;
    password: string;
  };
  const [inputs, setInputs] = useState({ email: "", password: "" });
  //........errors..............
  type errors = {
    email: string;
    password: string;
  };
  const [errors, setErrors] = useState({ email: "", password: "" });

  //..................loader................
  const [showLoader, setshowLoader] = useState(false);
  //...............check......................
  const [rememberMe, setRememberMe] = useState(false);
  const handleCheck = () => {
    setRememberMe(!rememberMe);
  };
  //...........................................
  const handleOnChange = (text: string, CustomTextInput: string) => {
    setInputs((prevState) => ({ ...prevState, [CustomTextInput]: text }));
  };
  const handleError = (
    errorMessage: string | null,
    CustomTextInput: string
  ) => {
    setErrors((prevState) => ({
      ...prevState,
      [CustomTextInput]: errorMessage,
    }));
  };
  //.............................email logIn.........
  // const emailLogin = () => {
  //   setshowLoader(true);
  //   auth()
  //     .signInWithEmailAndPassword(inputs.email, inputs.password)
  //     .then(() => {
  //       setshowLoader(false);
  //       props.navigation.navigate("BottomTab");
  //     })
  //     .catch((error) => {
  //       Alert.alert("Account not found");
  //     });
  //   console.log("email user", auth().currentUser);
  //   const emailUserData = auth().currentUser;
  //   //console.log('emailUser Info name: ', emailUserData.email); // Log the entire userInfo
  //   if (emailUserData) {
  //     const userData = {
  //       name: emailUserData.displayName || "Email User", // Fallback if no displayName
  //       email: emailUserData.email,
  //       photo: emailUserData.photoURL || null, // Fallback if no photoURL
  //       uid: emailUserData.uid,
  //     };
  //     dispatch(setUserData(userData)); // Dispatch user data to Redux store
  //   }
  //   AsyncStorage.setItem("check-status", rememberMe ? "true" : "false"); //....store to local storage
  // };

  //..................validater....................
  const validater = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("Enter the Email", "email");
      valid = false;
    } else if (
      //!inputs.email.match(/\S+@\S+\.\S+/))
      !emailReges.test(inputs.email)
    ) {
      handleError("Enter a valid Email", "email");
      valid = false;
    }
    if (!inputs.password) {
      handleError("Enter the Password", "password");
      valid = false;
    } else if (inputs.password.length < 8) {
      handleError("Password must have at least 8 characters", "password");
      valid = false;
    }
    if (valid) {
      // emailLogin();
    }
  };
  //..........................................google sign in code.....................
  // const onGoogleButtonPress = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     await GoogleSignin.hasPlayServices({
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     const userInfo = await GoogleSignin.signIn();
  //     //console.log('User Info: ', userInfo); // Log the entire userInfo object
  //     // console.log('User Info name: ', userInfo.data.user.name); // Log the entire userInfo object
  //     // Check where the ID token is located
  //     const idToken =
  //       userInfo.idToken ||
  //       userInfo.data.idToken ||
  //       userInfo.authentication.idToken; // Adjust based on the structure
  //     console.log("ID Token: ", idToken); // Log the ID token

  //     if (!idToken) {
  //       throw new Error("Google Sign-In failed: No ID token received.");
  //     }
  //     setshowLoader(true); // Show loader when signing in with Google
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     await auth().signInWithCredential(googleCredential);

  //     // Extract useful user information
  //     const userData = {
  //       name: userInfo.data.user.name,
  //       email: userInfo.data.user.email,
  //       photo: userInfo.data.user.photo,
  //       id: userInfo.data.user.id,
  //     };
  //     // setUserInfo(userData);
  //     //console.log('Success', 'Google Sign-In Successful!');

  //     dispatch(setUserData(userData)); // Dispatch user data to Redux store
  //     await AsyncStorage.setItem("check-status", rememberMe ? "true" : "false"); //....store to local storage
  //     //await AsyncStorage.setItem('asm', 'tayyab');
  //     setshowLoader(false); // hide loader when go to home
  //     props.navigation.navigate("BottomTab");
  //     //...............storeData on AsyncStorage....
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert("Google Sign-In Error", error.message);
  //   }
  // };

  //................................
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.screenContainer}
      >
        <View>
          <Header icon={icons.ArrowLeft} title="Login" />
          <CustomText
            text={"Enter your email address and password to login."}
            color={Colors.black}
            fontFam={Fonts.regular}
            style={{
              marginTop: moderateScale(10),
              marginLeft: moderateScale(5),
            }}
          />
          {/* ...................Email............................................ */}
          <CustomTextInput
            placeholder="Email Address"
            secureTextEntry={false}
            keyboardType="email-address"
            onChangeText={(text) => handleOnChange(text, "email")}
            errorMessage={errors.email}
            onFocus={() => handleError(null, "email")}
            placeholderTextColor={Colors.gray}
          />
          {/* ...................Password....................... */}
          <CustomTextInput
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={(text) => handleOnChange(text, "password")}
            rightIcon={icons.Eye}
            errorMessage={errors.password}
            onFocus={() => handleError(null, "password")}
            placeholderTextColor={Colors.gray}
          />
          {/* //............Forgot the password? */}
          <TouchableOpacity>
            <CustomText
              text={"Forgot the password?"}
              color={Colors.blue}
              fontWeight="bold"
              fontFam={Fonts.semiBold}
              marginBottom={20}
            />
          </TouchableOpacity>
          {/* ...................Login Button.......................... */}
          <CustomButton
            title={"Login"}
            onPress={validater}
            marginVertical={20}
          />
          {/* .........Signin option............ */}
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <CustomText
              text={" Don’t have an account? "}
              label={<CustomText text={"Sign Up"} color={Colors.blue} />}
            />
          </TouchableOpacity>
          {/* ................OR......................... */}
          <View style={styles.lineVw}>
            <View style={styles.line} />
            <CustomText text={"  OR  "} />
            <View style={styles.line} />
          </View>

          {/* ..................SocialLogin................... */}
          <SocialLogin title="Continue with Google" icon={icons.google} />
          <SocialLogin title="Continue with facebook" icon={icons.fb} />
          <SocialLogin title="Continue with Apple ID" icon={icons.apple} />
        </View>
      </ScrollView>
      {/* Loader Overlay */}
      {showLoader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.orange} />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  line: {
    height: 2,
    width: "45%",
    backgroundColor: "#E3E5E7",
  },
  lineVw: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(60),
    marginBottom: scale(40),
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
    zIndex: 10, // Ensure it's on top
  },
});
