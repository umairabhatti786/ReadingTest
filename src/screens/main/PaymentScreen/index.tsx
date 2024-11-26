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
import CountryDropDown from "../../../components/CountryDropDown";
//.....................types.....................
interface PaymentScreen {
  navigation: StackNavigationProp<RootStackParamsList, "PaymentScreen">;
}

//............................main func....................

const PaymentScreen = ({ navigation }: PaymentScreen) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Header title="Payment Info" onPress={() => navigation.goBack()} />
        <CustomText
          text={
            "Add your optional payment method to save for future purchases."
          }
          marginVertical={10}
        />
        <CustomTextInput
          placeholder="Card Nuumber"
          rightIcon={icons.visa}
          rightIconWidth={45}
          rightIconheight={20}
        />
        <CustomTextInput placeholder="Card Holder Name" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomTextInput placeholder="06 / 27" width={scale(150)} />
          <CustomTextInput placeholder="CVC" width={scale(150)} />
        </View>
        <CustomTextInput placeholder="Address" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomTextInput placeholder="City" width={scale(150)} />
          <CustomTextInput placeholder="State/Province" width={scale(150)} />
        </View>
        <CountryDropDown />
        <CustomTextInput placeholder="ZIP Code" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomTab")}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText text={"skip"} color={Colors.blue} />
      </TouchableOpacity>
      <CustomButton
        title="Continue"
        onPress={() => navigation.navigate("BottomTab")}
      />
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
    justifyContent: "space-between",
  },
  content: {
    gap: moderateScale(20),
    marginBottom: verticalScale(25),
  },
});
