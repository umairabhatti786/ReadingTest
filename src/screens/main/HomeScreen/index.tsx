import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { BottomTabParams } from "../../../routes/BottomTab";
import { Colors } from "../../../utils/Colors";
interface HomeScreenProps {
  navigation: BottomTabNavigationProp<BottomTabParams, "HomeScreen">;
}
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.screenContainer}>
      <HeaderBtmTabs />
    </View>
  );
};

export default HomeScreen;

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
