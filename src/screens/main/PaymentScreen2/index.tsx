import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { ms, s, vs } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
import DropDown from "../../../components/DropDown";
import { countries, banks } from "../../../utils/Data/data";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
//.....................types.....................
interface PaymentScreen2Props {
  navigation: StackNavigationProp<RootStackParamsList, "PaymentScreen2">;
}
//............................main func....................
const PaymentScreen2 = ({ navigation }: PaymentScreen2Props) => {
  const [country, setCountry] = useState<{
    label: string;
    value: string | number;
  } | null>(null);

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.main}
      >
        <View style={styles.content}>
          <Header title="Payment Info" onPress={() => navigation.goBack()} />
          <CustomText
            text={
              "Do you own a Credit or Debit Card from the banks listed below? "
            }
          />
        </View>

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

        <View style={styles.content}>
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
            <CustomTextInput placeholder="06 / 27" width={s(150)} />
            <CustomTextInput placeholder="CVC" width={s(150)} />
          </View>
          <CustomTextInput placeholder="Address" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="City" width={s(150)} />
            <CustomTextInput placeholder="State/Province" width={s(150)} />
          </View>
          <DropDown
            value={country}
            data={countries}
            placeholder="countries"
            onChange={(selectedItem) => setCountry(selectedItem)}
          />
          {/* <CountryDropDown /> */}
          <CustomTextInput placeholder="ZIP Code" />
          <CustomButton
            title="Continue"
            onPress={() => navigation.goBack()}
            buttonStyle={{ marginHorizontal: s(20) }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen2;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
  },
  main: {
    marginVertical: vs(20),
  },
  content: {
    gap: vs(20),
    marginHorizontal: s(20),
    marginBottom: vs(20),
  },
  bankcards: {
    flexDirection: "row",
    gap: s(10),
    paddingHorizontal: s(20),
    marginBottom: vs(20),
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
});
