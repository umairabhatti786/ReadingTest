import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
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
interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "LoginScreen">;
}

//.................main func.......................
const LoginScreen = ({ navigation }: LoginScreenProps) => {
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
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.screenContainer}>
        <Header icon={icons.ArrowLeft} title="Sign Up" />
        <CustomText
          text={"Enter the following details to create an account"}
          color={Colors.black}
          fontFam={Fonts.regular}
          style={{ marginTop: moderateScale(10), marginLeft: moderateScale(5) }}
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
          rightIconStyle={styles.rightIconStyle}
          errorMessage={errors.password}
          onFocus={() => handleError(null, "password")}
          placeholderTextColor={Colors.gray}
        />
        {/* ...................Confirm Password..................... */}
        <CustomTextInput
          placeholder={"Confirm Password"}
          onChangeText={(text) => handleOnChange(text, "confirm")}
          rightIcon={icons.Eye}
          rightIconStyle={styles.rightIconStyle}
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
              marginLeft={moderateScale(5)}
            />
            <View style={styles.policyvw2}>
              <CustomText
                text={"Terms of service"}
                color={Colors.blue}
                textDecorationLine="underline"
                marginLeft={moderateScale(5)}
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

        {/* ........................CustomButton.................. */}
        <CustomButton
          title="Sign Up"
          style={styles.button}
          onPress={validater}
        />
        {/* .............Already have an account?.................. */}
        <CustomText
          text={"Already have an account?"}
          label={" Login"}
          style={{ marginTop: moderateScale(20) }}
        />
        {/* ................OR......................... */}
        <View style={styles.lineVw}>
          <View style={styles.line} />
          <CustomText text={"OR"} style={styles.or} />
          <View style={styles.line} />
        </View>
        {/* ..................google................... */}
        <SocialLogin title="Continue with Google" icon={icons.google} />
        {/* ..................facebook................... */}
        <SocialLogin title="Continue with facebook" icon={icons.fb} />
        {/* ..................apple................... */}
        <SocialLogin title="Continue with Apple ID" icon={icons.apple} />
      </View>
    </ScrollView>
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
  header: {
    flexDirection: "row",
  },
  text1: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginTop: moderateScale(10),
    marginLeft: moderateScale(5),
  },
  policyText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginLeft: moderateScale(5),
  },
  rightIconStyle: {
    height: verticalScale(24),
    width: scale(24),
  },
  policyVw: {
    flexDirection: "row",
    // alignItems: "center",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  policyvw2: {
    flexDirection: "row",
    // alignItems: "center",
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
  button: {
    backgroundColor: Colors.blue,
  },
  lineVw: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(10),
  },
  line: {
    height: 2,
    width: "45%",
    backgroundColor: "#E3E5E7",
  },
  or: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: Fonts.regular,
    padding: 10,
  },
  socialLogin: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: "row",
  },
  socialIcon: {
    height: verticalScale(20),
    width: scale(20),
  },
  link: {
    color: Colors.blue,
    textDecorationLine: "underline",
  },
});
