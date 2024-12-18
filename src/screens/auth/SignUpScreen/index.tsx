import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import Fonts from "../../../utils/Fonts";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import {
  scale,
  verticalScale,
  moderateScale,
  vs,
} from "react-native-size-matters";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import SocialLogin from "../../../components/SocialLogin";
import CustomText from "../../../components/CustomText";
import icons from "../../../assets/icons";
import { emailReges } from "../../../utils/Reges";
//............fire base auth...................
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  SignInSuccessResponse,
} from "@react-native-google-signin/google-signin"; // ....Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    "162246597762-pj4rhqjgvge1bg7svmcecksour1q4vqo.apps.googleusercontent.com", // Web client ID
});

//.....................types.....................
interface SignUpScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "SignUpScreen">;
}

//.................main func.......................
const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
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
  //.................inputs.........................
  type inputs = {
    email: string;
    password: string;
    confirm: string;
  };
  const [inputs, setInputs] = useState<inputs>({
    email: "",
    password: "",
    confirm: "",
  });
  //........................errors...........................
  type errors = {
    email: string;
    password: string;
    confirm: string;
  };
  const [errors, setErrors] = useState<errors>({
    email: "",
    password: "",
    confirm: "",
  });
  //..................check.................
  const [check, setCheck] = useState<boolean>(false);
  const checkHandler = () => setCheck(!check);
  //...................OnChange........................
  const handleOnChange = (text: string, CustomTextInput: string) => {
    setInputs((prevState) => ({ ...prevState, [CustomTextInput]: text }));
  };
  //...................Error........................
  const handleError = (
    errorMessage: string | null,
    CustomTextInput: string
  ) => {
    setErrors((prevState) => ({
      ...prevState,
      [CustomTextInput]: errorMessage,
    }));
  };
  //..................validater....................
  const validater = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("Enter the Email", "email");
      valid = false;
    } else if (
      //(!inputs.email.match(/\S+@\S+\.\S+/))
      !emailReges.test(inputs.email)
    ) {
      handleError("Enter a valid Email", "email");
      valid = false;
    }
    if (!inputs.password) {
      handleError("Enter the Password", "password");
      valid = false;
    } else if (inputs.password.length < 6) {
      handleError("Password must have at least 6 characters", "password");
      valid = false;
    }
    if (!inputs.confirm) {
      handleError(" Confirm Password please ", "confirm");
      valid = false;
    } else if (inputs.password !== inputs.confirm) {
      handleError("Password did not match ", "confirm");
      valid = false;
    }
    if (valid && check) {
      Alert.alert("logged In");
      () => navigation.navigate("BottomTab");
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.screenContainer}
    >
      <View>
        <Header title="Sign Up" onPress={() => navigation.goBack()} />
        <CustomText
          text={"Enter the following details to create an account"}
          color={Colors.black}
          fontFam={Fonts.regular}
          marginTop={15}
          marginLeft={5}
          marginBottom={10}
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
          marginBottom={20}
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
          marginBottom={20}
        />
        {/* ...................Confirm Password..................... */}
        <CustomTextInput
          placeholder={"Confirm Password"}
          onChangeText={(text) => handleOnChange(text, "confirm")}
          rightIcon={icons.Eye}
          errorMessage={errors.confirm}
          onFocus={() => handleError(null, "confirm")}
          placeholderTextColor={Colors.gray}
          marginBottom={20}
        />
        {/* ..................policy.......................... */}
        <View style={styles.policyVw}>
          <TouchableOpacity style={styles.checkboxVw} onPress={checkHandler}>
            <Image source={icons.box} style={styles.box} />
            {check && <Image source={icons.check} style={styles.check} />}
          </TouchableOpacity>
          <View>
            <CustomText
              text={" By selecting this, you agree to the Readings"}
              marginLeft={5}
            />
            <View style={styles.policyvw2}>
              <CustomText
                text={"Terms of service"}
                color={Colors.blue}
                textDecorationLine="underline"
                marginLeft={5}
              />
              <CustomText text={" and "} />
              <CustomText
                text={"privacy policy"}
                color={Colors.blue}
                textDecorationLine="underline"
              />
            </View>
          </View>
        </View>

        {/* ........................Sign Up Button.................. */}
        <CustomButton
          title="Sign Up"
          backgroundColor={Colors.blue}
          onPress={validater}
          marginVertical={20}
        />
      </View>
      {/* .............Already have an account?.................. */}
      <View style={styles.loginOptions}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <CustomText
            text={" Already have an account?"}
            label={<CustomText text={" Login"} color={Colors.blue} />}
            // marginTop={20}
          />
        </TouchableOpacity>
        {/* ................OR......................... */}
        <View style={styles.lineVw}>
          <View style={styles.line} />
          <CustomText text={" OR  "} />
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
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  policyVw: {
    flexDirection: "row",
    marginTop: vs(20),
    marginBottom: vs(10),
  },
  policyvw2: {
    flexDirection: "row",
  },
  box: {
    height: verticalScale(24),
    width: scale(24),
  },
  check: {
    height: verticalScale(8),
    width: scale(10),
    position: "absolute",
  },
  checkboxVw: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(5),
  },
  loginOptions: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: vs(15),
  },
  lineVw: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 2,
    width: "45%",
    backgroundColor: "#E3E5E7",
  },
});
