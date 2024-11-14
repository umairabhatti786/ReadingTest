import { StyleSheet, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";

const EditPersonalInfo = () => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <Header title="Edit Profile" />
        <CustomText
          text={
            "You can edit your name and phone number below. You will need to enter your password to cnfirm."
          }
        />
        <CustomTextInput placeholder="Name" />
        <CustomTextInput
          placeholder="+92 345 123 456 7"
          icon={icons.ArrowDown}
        />
        <CustomTextInput placeholder="Password" />
      </View>
      <CustomButton title="Save Info" />
    </View>
  );
};

export default EditPersonalInfo;

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
