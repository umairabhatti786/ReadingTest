import React, { useState } from "react";
import { Text, Image, View, TextInput, TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Fonts from "../../utils/Fonts";

type inputProps = {
  inputStyle?: any;
  iconStyle?: any;
  rightIconStyle?: any;
  errorMessageStyle?: any;

  onChangeText: (text: string) => void;
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
  padding?: number;
  borderRadius?: number;
  backgroundColor?: string;
  marginVertical?: number;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
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
  placeholderTextColor = "#212121",
  iconStyle,
  rightIconStyle,

  borderWidth,
  borderColor,
  width,
  height,
  padding,
  borderRadius,
  backgroundColor,
  marginVertical,

  fontSize,
  fontWeight,

  fontFamily,
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
            alignItems: "center",
            borderWidth: borderWidth || 1,
            borderColor: borderColor || "#EEEEEE",
            width: width || "100%",
            height: height || verticalScale(50),
            padding: padding || moderateScale(10),
            borderRadius: borderRadius || moderateScale(15),
            backgroundColor: backgroundColor || "#FFFFFF",
            marginVertical: marginVertical || verticalScale(10),
          },
          inputContainerStyle,
        ]}
      >
        {icon && (
          <Image
            source={icon}
            style={[
              { resizeMode: "contain", width: scale(15), height: scale(15) },
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
          placeholderTextColor={placeholderTextColor}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Image
              source={rightIcon}
              style={[
                rightIconStyle,
                {
                  paddingRight: moderateScale(10),
                  width: scale(15),
                  height: scale(15),
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
