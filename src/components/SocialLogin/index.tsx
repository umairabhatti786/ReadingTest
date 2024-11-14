import { Image, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/Colors";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import CustomText from "../CustomText";

type socialloginprops = {
  icon: any;
  title?: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
  borderRadius?: number;
  marginTop?: number;
};

const SocialLogin = ({
  icon,
  title,
  height,
  width,
  backgroundColor,
  borderRadius,
  marginTop,
}: socialloginprops) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "row",

        height: verticalScale(height || 45),
        width: width || "100%",
        backgroundColor: backgroundColor || Colors.white,
        borderRadius: moderateScale(borderRadius || 10),
        marginTop: moderateScale(marginTop || 20),
      }}
    >
      <Image
        source={icon}
        style={{
          height: verticalScale(20),
          width: scale(20),
          resizeMode: "contain",
        }}
      />
      <CustomText text={title} marginLeft={moderateScale(10)} />
    </View>
  );
};

export default SocialLogin;
