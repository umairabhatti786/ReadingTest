import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";

const CartScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <HeaderBtmTabs />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
  },
});
