import { StyleSheet, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";

const ChangePasswordScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <Header title="Change Password" />
        <CustomText
          text={"Enter your current password and create new password below."}
        />
        <CustomTextInput placeholder="Email address" rightIcon={icons.Eye} />
        <CustomTextInput placeholder="New Password" rightIcon={icons.Eye} />
        <CustomTextInput placeholder="Confirm New Password" />
      </View>
      <CustomButton title="Change Password" />
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    justifyContent: "space-between",
  },
});
