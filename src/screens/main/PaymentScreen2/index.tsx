import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import {
  moderateScale,
  ms,
  s,
  scale,
  verticalScale,
  vs,
} from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
import CountryDropDown from "../../../components/CountryDropDown";
import imgs from "../../../assets/imgs";
//.....................types.....................
interface PaymentScreen2Props {
  navigation: StackNavigationProp<RootStackParamsList, "PaymentScreen2">;
}

//............................main func....................

const PaymentScreen2 = ({ navigation }: PaymentScreen2Props) => {
  const banks = [
    {
      id: "1",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
    {
      id: "2",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
    {
      id: "3",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
    {
      id: "4",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
    {
      id: "5",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
    {
      id: "6",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
    {
      id: "7",
      title: "Meezan Bank",
      image: imgs.MeezanBank,
    },
  ];
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header title="Payment Info" onPress={() => navigation.goBack()} />
          <CustomText
            text={
              "Do you own a Credit or Debit Card from the banks listed below? "
            }
            marginVertical={10}
          />
          {/* .........map.................. */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bankcards}
          >
            {banks.map((item) => (
              <TouchableOpacity key={item.id} style={styles.bankcard}>
                <Image source={item.image} style={styles.bankImg} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <CustomTextInput
            placeholder="Card Nuumber"
            rightIcon={icons.visa}
            rightIconWidth={45}
            rightIconheight={20}
          />
          {/* ..............Discount................... */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text={"Discount"} />
            <CustomText text={"25%"} color={Colors.green} />
          </View>

          <CustomText
            text={
              "\u2022 Card discounts are applicable on book purchases  only & will not be applied on non-book items."
            }
            color={Colors.red}
          />
          <CustomText
            text={"\u2022 The discount can be redeemed once per day."}
            color={Colors.red}
          />
          <CustomTextInput placeholder="Card Holder Name" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="06 / 27" width={scale(150)} />
            <CustomTextInput placeholder="CVC" width={scale(150)} />
          </View>
          <CustomTextInput placeholder="Address" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="City" width={scale(150)} />
            <CustomTextInput placeholder="State/Province" width={scale(150)} />
          </View>
          <CountryDropDown />
          <CustomTextInput placeholder="ZIP Code" />
        </View>

        <CustomButton title="Continue" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};

export default PaymentScreen2;

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
    textAlign: "justify",
  },
  bankcard: {
    height: vs(64),
    width: s(72),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
  },
  bankImg: {
    height: vs(32),
    width: s(32),
  },
  bankcards: {
    flexDirection: "row",
    gap: s(10),
  },
});
