import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import icons from "../../assets/icons";
import CustomText from "../CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";

type categoryProps = {
  title: any;
  onPress?: () => void;
};
const Category = ({ title, onPress }: categoryProps) => {
  return (
    <TouchableOpacity style={styles.Category} onPress={onPress}>
      <CustomText text={title} />
      <Image source={icons.arrowRight} style={styles.arrowRight} />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  Category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: verticalScale(48),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(5),
  },
  arrowRight: {
    height: scale(24),
    width: verticalScale(24),
  },
});
