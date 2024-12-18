import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";

type Props = TextProps & {
  color?: string;
  size?: number;
  fontFam?: string;
  text?: string;
  style?: StyleProp<TextStyle>;
  fontWeight?: string | number;
  //  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | number;
};
const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  fontWeight,
  ...rest // Capture all other props
}: Props) => {
  return (
    <Text
      style={[
        {
          color: color || Colors.black,
          fontSize: size || 14,
          // fontWeight: fontWeight || "500",
          fontWeight: fontWeight as TextStyle["fontWeight"], // Explicitly cast
          fontFamily: fontFam || Fonts.regular,
        },
        style,
      ]}
      {...rest} // Spread additional props here
    >
      {text}
    </Text>
  );
};

export default CustomText;
