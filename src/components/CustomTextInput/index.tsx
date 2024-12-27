import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
} from "react-native";
import { vs, s, ms } from "react-native-size-matters";
import Fonts from "../../utils/Fonts";
import { Colors } from "../../utils/Colors";
import CustomText from "../CustomText";

type inputProps = {
  alignItems?: string;
  textInputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;

  onChangeText?: (text: string) => void;
  value?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
  textInputProps?: any;
  placeholderTextColor?: string;
  onRightIconPress?: () => void;
  onFocus?: () => void;
  borderWidth?: number;
  borderColor?: string;
  width?: number | `${number}%` | "auto"; // Updated width type
  height?: number;
  iconHeight?: number;
  iconWidth?: number;
  padding?: number;
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  rightIconWidth?: number;
  rightIconheight?: number;
};
const CustomTextInput = ({
  onChangeText,
  value,
  placeholder,
  icon,
  rightIcon,
  secureTextEntry,
  errorMessage,
  errorMessageStyle,
  textInputStyle,
  inputContainerStyle,
  textInputProps,
  textColor,
  placeholderTextColor,
  iconStyle,
  rightIconStyle,
  onFocus,
  width,
  iconHeight,
  iconWidth,
  backgroundColor,
  fontSize,
  fontWeight,

  fontFamily,
  rightIconWidth,
  rightIconheight,
}: inputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const onRightIconPress = () => {
    if (rightIcon) setIsSecure(!isSecure);
  };
  return (
    <View>
      <View
        style={[
          {
            backgroundColor: backgroundColor || Colors.white,
            width: width || "100%",

            flexDirection: "row",
            alignItems: "center",
            height: vs(45),
            padding: ms(10),
            borderRadius: ms(10),
          },
          inputContainerStyle,
        ]}
      >
        {icon && (
          <Image
            source={icon}
            style={[
              {
                resizeMode: "contain",
                width: s(iconWidth || 15),
                height: s(iconHeight || 15),
              },
              iconStyle,
            ]}
          />
        )}
        <TextInput
          placeholder={placeholder}
          style={[
            {
              flex: 1,
              padding: 5,
              color: textColor || Colors.black,
              fontSize: fontSize || 14,
              fontWeight: fontWeight,
              fontFamily: fontFamily || Fonts.regular,
            },
            textInputStyle,
          ]}
          onChangeText={onChangeText}
          value={value}
          onFocus={onFocus}
          secureTextEntry={rightIcon ? isSecure : false}
          {...textInputProps}
          placeholderTextColor={placeholderTextColor || Colors.gray}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Image
              source={rightIcon}
              style={[
                {
                  paddingRight: ms(10),
                  width: s(rightIconWidth || 15),
                  height: vs(rightIconheight || 15),
                },
                rightIconStyle,
              ]}
              // {Children}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <CustomText
          text={errorMessage}
          color={Colors.red}
          style={[{ textAlign: "right" }, errorMessageStyle]}
        />
      )}
    </View>
  );
};

export default CustomTextInput;
