import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import icons from "../../assets/icons";

import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const HeaderBtmTabs = () => {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Image source={icons.bars} style={styles.icon} />
        </TouchableOpacity>
        <Image source={icons.logo} style={styles.logo} />
      </View>
      <TouchableOpacity>
        <Image source={icons.bell} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBtmTabs;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: verticalScale(24),
    width: scale(24),
  },
  logo: {
    height: verticalScale(20),
    width: scale(98),
    marginLeft: scale(20),
  },
});
