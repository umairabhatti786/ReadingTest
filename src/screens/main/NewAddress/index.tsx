import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";

interface NewAddressProps {
  navigation: StackNavigationProp<RootStackParamsList, "NewAddress">;
}
const NewAddress = ({ navigation }: NewAddressProps) => {
  return (
    <View style={styles.screenContainer}>
      <Header title="New Address" />
    </View>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    justifyContent: "space-between",
  },
});
