import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import CustomText from "../CustomText";
import icons from "../../assets/icons";

type Props = {
  title?: string;
  onPress?: () => void;
};
const Header = ({ title, onPress }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: s(7),
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icons.ArrowLeft}
          style={{
            width: s(15),
            height: s(15),
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
      <CustomText
        text={title}
        color={Colors.black}
        fontFam={Fonts.bold}
        size={20}
        fontWeight="bold"
      />
    </View>
  );
};
export default Header;
