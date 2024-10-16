import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
type socialloginprops = {
  icon: any;
  title: string;
};
const SocialLogin = ({ icon, title }: socialloginprops) => {
  return (
    <View style={styles.socialLogin}>
      <Image source={icon} style={styles.socialIcon} />
      <Text style={styles.text1}>{title}</Text>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  socialLogin: {
    height: moderateScale(50),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: moderateScale(20),
  },
  socialIcon: {
    height: verticalScale(20),
    width: scale(20),
    resizeMode: "contain",
  },
  text1: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginLeft: moderateScale(10),
  },
});
