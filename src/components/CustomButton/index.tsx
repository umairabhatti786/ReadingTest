import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Fonts from "../../utils/Fonts";
import { Colors } from "../../utils/Colors";

type custombuttonprops = {
  style?: any;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  disabled?: boolean;
  activeOpacity?: number;

  backgroundColor?: string;
  borderRadius?: number;
  height?: number;
  width?: number;
  alignItems?: string;
  justifyContent?: string;
  alignSelf?: string;

  color?: string;
  fontWeight?: string | number;
  fontSize?: number;
  fontFamily?: string;
};
const CustomButton = ({
  style,
  title,
  onPress,
  textStyle,
  disabled,
  activeOpacity,

  backgroundColor,
  borderRadius,
  height,
  width,
  alignItems,
  justifyContent,
  alignSelf,

  color,
  fontWeight,
  fontSize,
  fontFamily,
}: custombuttonprops) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor:backgroundColor|| Colors.blue,
          borderRadius:borderRadius|| moderateScale(15),
          height:height|| verticalScale(50),
          width:width|| "100%",
          alignItems:alignItems|| "center",
          justifyContent: justifyContent||"center",
          alignSelf:alignSelf|| "center",
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
    >
      <Text
        style={[
          {
            color: color || Colors.white,
            fontWeight: fontWeight || "bold",
            fontSize: fontSize || 16,
            fontFamily: fontFamily || Fonts.bold,
          },
          textStyle,
          disabled,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;