import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
const Header = () => {
  return (
    <View style={styles.headervw}>
      <Image
        source={require("../../assets/icons/ArrowLeft.png")}
        style={styles.ArrowLeft}
      />
      <Text style={styles.heading}>Sign Up</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headervw: {
    flexDirection: "row",
    gap: scale(5),
    alignItems: "center",
  },
  ArrowLeft: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
  heading: {
    color: Colors.black,
    fontSize: 25,
    fontFamily: Fonts.semiBold,
  },
});
