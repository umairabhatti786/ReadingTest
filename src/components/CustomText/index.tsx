import { Text } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";

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
          marginLeft: marginLeft,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginRight: marginRight,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
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
