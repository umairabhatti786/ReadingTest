import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Fonts from "../../utils/Fonts";

type inputProps = {
  onChangeText: (text: string) => void;
  value?: string;
  placeholder: string;
  icon?: any; // Source of image
  rightIcon?: any; // Source of image
  secureTextEntry?: boolean;
  errorMessage?: string;
  errorMessageStyle?: any;
  inputStyle?: any;
  imageStyle?: any;
  inputContainerStyle?: any;
  textInputProps?: any;
  onFocus?: () => void;
  maxLength?: number;
  onBlur?: () => void;
  keyboardType?: string;
  placeholderTextColor?: string;
  onRightIconPress?: () => void;
  iconStyle?: any;
  rightIconStyle?: any;
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
  imageStyle,
  inputContainerStyle,
  textInputProps,
  onFocus,
  maxLength,
  onBlur,
  keyboardType = "default",
  placeholderTextColor = "#212121",
  onRightIconPress,
  iconStyle,
  rightIconStyle,
}: inputProps) => {
  return (
    <View>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon && (
            <Image source={icon} style={[styles.inputImage, imageStyle]} />
          )}
          <TextInput
            placeholder={placeholder}
            style={[
              styles.textInput,
              inputStyle,
              { width: rightIcon ? "60%" : "100%" },
            ]}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            {...textInputProps}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholderTextColor={placeholderTextColor}
          />
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {/* <View style={[rightIconStyle, styles.iconStyle]}>{rightIcon}</View> */}
            <Image
              source={rightIcon}
              style={[rightIconStyle, styles.iconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text style={[styles.errorMessage, errorMessageStyle]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    width: "100%",
    height: verticalScale(50),
    padding: moderateScale(10),
    alignItems: "center",
    borderRadius: moderateScale(15),
    backgroundColor: "#FFFFFF",
    marginVertical: verticalScale(10),
    justifyContent: "space-between",
  },
  inputLabal: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: verticalScale(7),
    fontFamily: Fonts.regular,
  },
  textInput: {
    marginLeft: moderateScale(10),
    height: verticalScale(60),
    fontFamily: Fonts.regular,
  },
  inputImage: {
    resizeMode: "contain",
    width: scale(24),
    height: scale(24),
  },
  errorMessage: {
    color: "red",
    textAlign: "right",
    fontFamily: Fonts.regular,
  },
  iconStyle: {
    paddingRight: moderateScale(10),
    width: scale(15),
    height: scale(15),
  },
});
