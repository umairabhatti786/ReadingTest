import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { vs, ms } from "react-native-size-matters";
import Fonts from "../../utils/Fonts";
import { Colors } from "../../utils/Colors";
import CustomText from "../CustomText";

type custombuttonprops = {
  buttonStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  height?: number;
  // width?: any;
  // width?: string | number;
  width?: number | `${number}%` | "auto"; // Updated width type
  alignItems?: string;
  justifyContent?: string;
  alignSelf?: string;
  color?: string;
  fontWeight?: string | number;
  fontSize?: number;
  fontFamily?: string;
};
const CustomButton = ({
  buttonStyle,
  title,
  onPress,
  backgroundColor,
  height,
  width,
  color,
  fontWeight,
  fontSize,
  fontFamily,
}: custombuttonprops) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: backgroundColor || Colors.blue,
          height: vs(height || 45),
          width: width || "100%",

          borderRadius: ms(10),
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        },
        buttonStyle,
      ]}
    >
      <CustomText
        text={title}
        color={color || Colors.white}
        fontWeight={fontWeight}
        size={fontSize || 14}
        fontFam={fontFamily || Fonts.regular}
      />
    </TouchableOpacity>
  );
};
export default CustomButton;
