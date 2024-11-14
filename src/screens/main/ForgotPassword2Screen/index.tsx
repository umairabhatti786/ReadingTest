import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import imgs from "../../../assets/imgs";

const ForgotPassword2Screen = () => {
  return (
    <View style={styles.screenContainer}>
      <Image source={imgs.ok} />
      <CustomText text={"Email Sent"} fontWeight="bold" />
      <CustomText
        text={
          "A reset password link has been sent to your email. Please follow the link to reset your password."
        }
      />
      <CustomButton title="Great!" />
    </View>
  );
};

export default ForgotPassword2Screen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
  },
});
