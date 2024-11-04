import { Image, View } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import CustomText from "../CustomText";

type Props = {
  icon?: any;
  width?: number;
  height?: number;
  title?: string;
};
const Header = ({ icon, width, height, title }: Props) => {
  return (
    <View style={{ flexDirection: "row", gap: scale(5), alignItems: "center" }}>
      <Image
        source={icon}
        style={{
          width: width || scale(20),
          height: height || scale(20),
          resizeMode: "contain",
        }}
      />
      <CustomText
        text={title}
        color={Colors.black}
        fontFam={Fonts.semiBold}
        size={25}
      />
    </View>
  );
};
export default Header;
