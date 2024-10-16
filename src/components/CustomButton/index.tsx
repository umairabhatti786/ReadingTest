import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Fonts from "../../utils/Fonts";

type custombuttonprops = {
  style?: any;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  disabled?: boolean;
  activeOpacity?: number;
};
const CustomButton = ({
  style,
  title,
  onPress,
  textStyle,
  disabled,
  activeOpacity,
}: custombuttonprops) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle, disabled]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderRadius: moderateScale(15),
    height: verticalScale(50),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
});
