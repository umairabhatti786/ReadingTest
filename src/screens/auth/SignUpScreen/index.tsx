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
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import SocialLogin from "../../../components/SocialLogin";
import CustomText from "../../../components/CustomText";
import icons from "../../../assets/icons";
import { emailReges } from "../../../utils/Reges";
//.....................types.....................
interface SignUpScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "SignUpScreen">;
}

//.................main func.......................
const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
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
        <Header title="Sign Up" />
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
        {/* ...................Confirm Password..................... */}
        <CustomTextInput
          placeholder={"Confirm Password"}
          onChangeText={(text) => handleOnChange(text, "confirm")}
          rightIcon={icons.Eye}
          errorMessage={errors.confirm}
          onFocus={() => handleError(null, "confirm")}
          placeholderTextColor={Colors.gray}
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
      <View style={styles.loginOptions}>
        {/* .............Already have an account?.................. */}
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
          <SocialLogin title="Continue with Google" icon={icons.google} />
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
    marginTop: moderateScale(20),
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
