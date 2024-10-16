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
  labalStyle,
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
          textDecorationLine: textDecorationLine,
          ...(lineHeight && { lineHeight: lineHeight }),
        },
        style,
        labalStyle,
      ]}
    >
      {text}
      {label}
    </Text>
  );
};

export default CustomText;
