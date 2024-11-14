import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import CustomText from "../CustomText";
import icons from "../../assets/icons";

type Props = {
  width?: number;
  height?: number;
  title?: string;
  onPress?: () => void;
};
const Header = ({ width, height, title, onPress }: Props) => {
  return (
    <View style={{ flexDirection: "row", gap: scale(5), alignItems: "center" }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icons.ArrowLeft}
          style={{
            width: scale(width || 20),
            height: scale(height || 20),
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
      <CustomText
        text={title}
        color={Colors.black}
        fontFam={Fonts.semiBold}
        size={20}
        fontWeight="600"
      />
    </View>
  );
};
export default Header;
