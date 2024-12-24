import { Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { ms, s, vs } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../utils/Colors";

import CountryPicker, { Country } from "react-native-country-picker-modal";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import icons from "../../../assets/icons";
import imgs from "../../../assets/imgs";
import ModalScreen from "../../../components/ModalScreen";
//.....................types.....................
interface PersonalInfoScreen {
  navigation: StackNavigationProp<RootStackParamsList, "PersonalInfoScreen">;
}

//............................main func....................
const RequestBookScreen = ({ navigation }: PersonalInfoScreen) => {
  //...for country selection...........
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [country, setCountry] = useState<Country | null>({
    // default country
    cca2: "PK", // Country code for Pakistan
    callingCode: ["92"], // Default calling code for Pakistan
    name: "Pakistan", // Country name
    region: "Asia", // Region
    subregion: "Southern Asia", // Subregion
    currency: ["PKR"], // Currency
    flag: "flag-pk", // Flag (usually used in react-native-country-picker-modal)
  });

  //..for send request modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Header title="Request a Book" />
        <View style={styles.inputs}>
          <CustomText
            text={
              "Enter the following details about the book you want to request."
            }
          />
          <CustomTextInput placeholder="Book Title" />
          <CustomTextInput placeholder="Author Name" />
          <CustomTextInput placeholder="Your Name" />
          <CustomTextInput placeholder="Email" />
          {/* Country Picker Modal */}
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

          <CustomTextInput
            placeholder="Additional Info"
            inputContainerStyle={{
              height: vs(130),
              alignItems: "flex-start",
            }}
          />
        </View>
      </View>
      <CustomButton
        title="Send Request"
        onPress={() => setModalVisible(true)}
      />
      {/* ...............Modal..................... */}
      <Modal
        animationType="slide" // Options: 'none', 'slide', 'fade'
        transparent={true} // Makes modal background transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Handles back button on Android
      >
        <ModalScreen
          img={imgs.gift2}
          heading="Request Received"
          status="We have received your request for the book. We will find it as soon as possible and notify you as it’s available"
          btnTitle="Back to Home"
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("BottomTab");
          }}
        />
      </Modal>
    </View>
  );
};

export default RequestBookScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: s(20),
    marginVertical: vs(10),
    justifyContent: "space-between",
  },
  content: {
    gap: vs(15),
  },
  inputs: {
    gap: vs(20),
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
  flagArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: s(10),
  },
  ArrowDown: {
    width: s(20),
    height: vs(20),
  },
  phoneInput: {
    width: s(200),
    height: vs(45),
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  countryCode: {
    marginRight: s(10), // Space between code and phone input
  },
});
