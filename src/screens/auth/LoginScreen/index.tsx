import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
import { emailReges } from "../../../utils/Reges";
import icons from "../../../assets/icons";
import Fonts from "../../../utils/Fonts";
import {
  scale,
  verticalScale,
  moderateScale,
  vs,
  s,
} from "react-native-size-matters";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import SocialLogin from "../../../components/SocialLogin";
import CustomText from "../../../components/CustomText";
import Header from "../../../components/Header";
import CustomTextInput from "../../../components/CustomTextInput";
//............fire base auth...................
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  SignInSuccessResponse,
} from "@react-native-google-signin/google-signin"; // .............................Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    "162246597762-pj4rhqjgvge1bg7svmcecksour1q4vqo.apps.googleusercontent.com", // Web client ID
});

//.....................types.....................
interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "LoginScreen">;
}

//............................main func....................
const LoginScreen = ({ navigation }: LoginScreenProps) => {
  //const dispatch = useDispatch(); //....for redux..............
  //.................onGoogleButtonPress.........................
  const onGoogleButtonPress = async () => {
    try {
      // Sign out any previously signed-in user to prompt account selection again
      await GoogleSignin.signOut();
      // Check if the device supports Google Play services
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = (await GoogleSignin.signIn()) as SignInSuccessResponse; // Sign in the user and retrieve userInfo
      // Get the sign-in result from Google and cast it to the correct type

      // Log userInfo to inspect the structure
      // console.log('User Info: ', userInfo);
      // Retrieve idToken from the correct property
      const idToken = userInfo.data.idToken;

      // Log the idToken to verify it's being retrieved correctly
      console.log("ID Token: ", idToken);

      if (!idToken) {
        throw new Error("Google Sign-In failed: No ID token received.");
      }
      //setshowLoader(true); // Show loader when signing in with Google

      // Create credential using idToken
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign in to Firebase with Google credential
      await auth().signInWithCredential(googleCredential);
      //Alert.alert('Success', 'Google Sign-In Successful!');
      // Extract useful user information
      const userData = {
        name: userInfo.data.user.name,
        email: userInfo.data.user.email,
        photo: userInfo.data.user.photo,
        id: userInfo.data.user.id,
      };
      // setUserInfo(userData);
      console.log("Success", "Google Sign-In Successful!");
      // dispatch(setUserData(userData)); // Dispatch user data to Redux store
      // await AsyncStorage.setItem("check-status", rememberMe ? "true" : "false"); //....store to local storage
      // setshowLoader(false); // hide loader when go to home
      navigation.navigate("PersonalInfoScreen", { user: userInfo });
    } catch (error: unknown) {
      // Type narrowing using a type guard
      if (error instanceof Error) {
        console.error("Google Sign-In Error:", error.message);
      } else {
        console.error("Unknown error occurred", error);
      }
      throw error; // Rethrow the error
    }
  };
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
    console.log(valid);
    if (valid) {
      navigation.navigate("BottomTab");
    }
  };

  //................................
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View>
          <Header title="Login" onPress={() => navigation.goBack()} />
          <CustomText
            text={"Enter your email address and password to login."}
            color={Colors.black}
            fontFam={Fonts.regular}
            style={{
              marginTop: vs(10),
              marginLeft: s(5),
              marginBottom: vs(20),
            }}
          />
          {/* ...................Email............................................ */}
          <CustomTextInput
            placeholder="Email Address"
            secureTextEntry={false}
            onChangeText={(text) => handleOnChange(text, "email")}
            errorMessage={errors.email}
            onFocus={() => handleError(null, "email")}
            placeholderTextColor={Colors.gray}
            inputContainerStyle={{ marginBottom: vs(20) }}
            textInputProps={{ keyboardType: "email-address" }}
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <CustomText
              text={"Forgot the password?"}
              color={Colors.blue}
              fontWeight="bold"
              fontFam={Fonts.semiBold}
              style={{ marginBottom: vs(30), marginTop: 25 }}
            />
          </TouchableOpacity>
          {/* ...................Login Button.......................... */}
          <CustomButton
            title={"Login"}
            onPress={validater}
            buttonStyle={{ marginVertical: vs(20) }}
          />
        </View>
        <View style={styles.loginOptions}>
          {/* .........Sign up option............ */}
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={{ marginTop: vs(20) }}
          >
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
          <View>
            <SocialLogin
              title="Continue with Google"
              icon={icons.google}
              onPress={onGoogleButtonPress}
            />
            <SocialLogin title="Continue with facebook" icon={icons.fb} />
            {Platform.OS === "ios" && (
              <SocialLogin title="Continue with Apple ID" icon={icons.apple} />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollContainer: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    // justifyContent: "space-between",
    flexGrow: 1,
  },
  line: {
    height: 2,
    width: "45%",
    backgroundColor: "#E3E5E7",
  },
  lineVw: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginOptions: {
    flex: 1,
    justifyContent: "space-between",
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
