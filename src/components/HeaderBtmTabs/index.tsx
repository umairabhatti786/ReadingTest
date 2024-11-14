import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import icons from "../../assets/icons";

import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const HeaderBtmTabs = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={icons.bars} style={styles.icon} />
        <Image source={icons.logo} style={styles.logo} />
      </View>
      <View>
        <Image source={icons.bell} style={styles.icon} />
      </View>
    </View>
  );
};

export default HeaderBtmTabs;

const styles = StyleSheet.create({
  icon: {
    height: verticalScale(24),
    width: scale(24),
  },
  logo: {
    height: verticalScale(24),
    width: scale(125),
    marginLeft: scale(20),
  },
});
