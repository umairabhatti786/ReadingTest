import { Image, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import imgs from "../../../assets/imgs";
import CountryPicker, { Country } from "react-native-country-picker-modal";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import ModalScreen from "../../../components/ModalScreen";
// ..................types.....................

interface EditPersonalInfoProps {
  navigation: StackNavigationProp<RootStackParamsList, "EditPersonalInfo">;
}

const EditPersonalInfo = ({ navigation }: EditPersonalInfoProps) => {
  //...for country selection...........
  const [country, setCountry] = useState<Country | null>({
    //..default country
    cca2: "PK", // Country code for Pakistan
    callingCode: ["92"],
    name: "Pakistan",
    region: "Asia",
    subregion: "Southern Asia",
    currency: ["PKR"],
    flag: "flag-pk",
  });
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.layout}>
        <View style={styles.content}>
          <Header title="Edit Profile" onPress={() => navigation.goBack()} />
          <CustomText
            text={
              "You can edit your name and phone number below. You will need to enter your password to cnfirm."
            }
            style={{ textAlign: "left" }}
          />
          <View style={{ gap: vs(20) }}>
            <CustomTextInput placeholder="Name" />
            {/* ..................Country Picker Modal.......... */}
            <View style={styles.countryContainer}>
              <CountryPicker
                withFlag
                withCallingCode
                withFilter
                countryCode={country?.cca2 || "PK"}
                visible={isCountryPickerVisible}
                onSelect={(selectedCountry) => {
                  setCountry(selectedCountry);
                  setIsCountryPickerVisible(false);
                }}
                onClose={() => setIsCountryPickerVisible(false)}
              />
              <Image source={icons.ArrowDown} style={styles.ArrowDown} />
              {country && (
                <CustomText
                  text={` +${country.callingCode[0]}`}
                  style={styles.countryCode}
                />
              )}
              <TextInput
                placeholder="345 123 456 7"
                style={styles.phoneInput}
                keyboardType="numeric"
              />
            </View>

            <CustomTextInput placeholder="Password" />
          </View>
        </View>
        <CustomButton title="Save Info" onPress={() => setModalVisible(true)} />
      </View>
      {/* ...............Modal..................... */}
      <Modal
        animationType="slide" // Options: 'none', 'slide', 'fade'
        transparent={true} // Makes modal background transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Handles back button on Android
      >
        <ModalScreen
          img={imgs.ok}
          heading="Email Sent"
          status="A reset password link has been sent to your email. Please follow the link to reset your password."
          btnTitle="Great!"
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("LoginScreen");
          }}
        />
      </Modal>
    </View>
  );
};

export default EditPersonalInfo;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    gap: vs(20),
  },
  layout: {
    flex: 1,
    marginHorizontal: s(20),
    marginBottom: ms(20),
    justifyContent: "space-between",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: vs(45),
    padding: ms(10),
    borderRadius: ms(15),
    backgroundColor: Colors.white,
  },
  ArrowDown: {
    width: s(20),
    height: vs(20),
  },
  plus: {
    width: s(10),
    height: vs(10),
    marginLeft: s(2),
  },
  newCardBtn: {
    marginVertical: vs(10),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: s(20),
  },
  countryCode: {
    marginRight: s(10), // Space between code and phone input
  },
  phoneInput: {
    width: s(200),
    height: vs(45),
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
