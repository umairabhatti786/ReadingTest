import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
//.....................types.....................
interface PaymentScreen {
  navigation: StackNavigationProp<RootStackParamsList, "PaymentScreen">;
}

//............................main func....................

const PaymentScreen = ({ navigation }: PaymentScreen) => {
  return (
    <View style={styles.screenContainer}>
      <Header title="Payment Info" />
      <CustomText
        text={"Add your optional payment method to save for future purchases."}
        marginVertical={verticalScale(10)}
      />
      <CustomTextInput placeholder="Card Nuumber" rightIcon={icons.visa} />
      <CustomTextInput placeholder="Card Holder Name" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomTextInput placeholder="06 / 27" width={scale(163)} />
        <CustomTextInput placeholder="CVC" width={scale(163)} />
      </View>
      <CustomTextInput placeholder="Address" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomTextInput placeholder="City" width={scale(163)} />
        <CustomTextInput placeholder="State/Province" width={scale(163)} />
      </View>
      <CustomTextInput placeholder="Country" />
      <CustomTextInput placeholder="ZIP Code" />
      <TouchableOpacity
        style={{ justifyContent: "center", marginVertical: verticalScale(20) }}
      >
        <CustomText text={"skip"} color={Colors.blue} />
      </TouchableOpacity>
      <CustomButton title="Continue" />
    </View>
  );
};

export default PaymentScreen;

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
