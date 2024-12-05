import React, { useState } from "react";
import { Text, Image, View, TextInput, TouchableOpacity } from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  vs,
  s,
  ms,
} from "react-native-size-matters";
import Fonts from "../../utils/Fonts";
import { Colors } from "../../utils/Colors";

type inputProps = {
  inputStyle?: any;
  iconStyle?: any;
  rightIconStyle?: any;
  errorMessageStyle?: any;

  onChangeText?: (text: string) => void;
  value?: string;
  placeholder: string;
  icon?: any; // Source of image
  rightIcon?: any; // Source of image
  secureTextEntry?: boolean;
  errorMessage?: string;
  inputContainerStyle?: any;
  textInputProps?: any;
  onFocus?: () => void;
  maxLength?: number;
  onBlur?: () => void;
  keyboardType?: string;
  placeholderTextColor?: string;
  onRightIconPress?: () => void;
  borderWidth?: number;
  borderColor?: string;
  width?: number;
  height?: number;
  iconHeight?: number;
  iconWidth?: number;
  padding?: number;
  borderRadius?: number;
  backgroundColor?: string;

  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  rightIconWidth?: number;
  rightIconheight?: number;
  alignItems?: string;

  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
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
  inputStyle,
  inputContainerStyle,
  textInputProps,
  onFocus,
  maxLength,
  onBlur,
  keyboardType = "default",
  placeholderTextColor,
  iconStyle,
  rightIconStyle,
  alignItems,

  width,
  height,
  iconHeight,
  iconWidth,
  padding,
  borderRadius,
  backgroundColor,

  fontSize,
  fontWeight,

  fontFamily,
  rightIconWidth,
  rightIconheight,

  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  marginHorizontal,
  marginVertical,
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
            flexDirection: "row",
            alignItems: alignItems || "center",
            width: width || "100%",
            height: vs(height || 45),
            padding: ms(padding || 10),
            borderRadius: ms(borderRadius || 10),
            backgroundColor: backgroundColor || Colors.white,
            marginVertical: vs(marginVertical || 0),
            marginHorizontal: vs(marginHorizontal || 0),
            marginLeft: s(marginLeft || 0),
            marginTop: vs(marginTop || 0),
            marginBottom: vs(marginBottom || 0),
            marginRight: s(marginRight || 0),
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
                width: scale(iconWidth || 15),
                height: scale(iconHeight || 15),
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
              fontSize: fontSize || 14,
              fontWeight: fontWeight,
              fontFamily: fontFamily || Fonts.regular,
            },
            inputStyle,
          ]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={rightIcon ? isSecure : false}
          keyboardType={keyboardType}
          {...textInputProps}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor || Colors.gray}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Image
              source={rightIcon}
              style={[
                rightIconStyle,
                {
                  paddingRight: moderateScale(10),
                  width: scale(rightIconWidth || 15),
                  height: verticalScale(rightIconheight || 15),
                },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text
          style={[
            { color: "red", textAlign: "right", fontFamily: Fonts.regular },
            errorMessageStyle,
          ]}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
