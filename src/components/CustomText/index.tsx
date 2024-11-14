import { Text } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import { scale, verticalScale } from "react-native-size-matters";

type Props = {
  color?: string;
  size?: number;
  fontFam?: string;
  text?: any;
  style?: any;
  lineHeight?: number;
  numberOfLines?: number;
  fontWeight?: string;
  textDecorationLine?: string;
  label?: any;
  labalStyle?: any;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
};
const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  lineHeight,
  numberOfLines,
  fontWeight,
  textDecorationLine,
  label,

  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  marginHorizontal,
  marginVertical,
}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          color: color || Colors.black,
          fontSize: size || 14,
          fontWeight: fontWeight || "500",
          fontFamily: fontFam || Fonts.regular,
          textDecorationLine,
          marginLeft: scale(marginLeft || 0),
          marginTop: verticalScale(marginTop || 0),
          marginBottom: verticalScale(marginBottom || 0),
          marginRight: scale(marginRight || 0),
          marginHorizontal: scale(marginHorizontal || 0),
          marginVertical: verticalScale(marginVertical || 0),
          lineHeight: lineHeight,
        },
        style,
      ]}
    >
      {text}
      {label}
    </Text>
  );
};

export default CustomText;
