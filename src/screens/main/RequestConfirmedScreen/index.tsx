import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Imgs from "../../../assets/imgs";
import imgs from "../../../assets/imgs";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../utils/Colors";

const RequestConfirmedScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Image source={imgs.gift} width={scale(96)} height={verticalScale(96)} />
      <CustomText text={"Gift Sent"} fontWeight="bold" />
      <CustomText
        text={
          "Your Gift Card is on its way to Rebecca and you both will be notify as she received. Usually takes 3 hours to arrive."
        }
      />
      <CustomButton title="Back to Home" color={Colors.white} />
    </View>
  );
};

export default RequestConfirmedScreen;

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
