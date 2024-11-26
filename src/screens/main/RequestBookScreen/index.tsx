import { Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import {
  moderateScale,
  s,
  scale,
  verticalScale,
  vs,
} from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../utils/Colors";

import CountryPicker, { Country } from "react-native-country-picker-modal";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import icons from "../../../assets/icons";
import imgs from "../../../assets/imgs";
//.....................types.....................
interface PersonalInfoScreen {
  navigation: StackNavigationProp<RootStackParamsList, "PersonalInfoScreen">;
}

//............................main func....................
const RequestBookScreen = ({ navigation }: PersonalInfoScreen) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Header title="Request a Book" />
          <CustomText
            text={
              "Enter the following details about the book you want to request."
            }
          />
          <CustomTextInput
            placeholder="Book Title"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Author Name"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Your Name"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Email"
            marginVertical={verticalScale(5)}
          />
          {/* Country Picker Modal */}

          <View style={styles.countryContainer}>
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              countryCode={country?.cca2 || "PA"}
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
            marginVertical={verticalScale(5)}
            height={verticalScale(130)}
            alignItems="flex-start"
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
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Image
                source={imgs.gift2}
                width={scale(96)}
                height={verticalScale(96)}
                style={styles.gift}
              />
              <CustomText
                text={"Request Received"}
                fontWeight="bold"
                size={20}
              />
              <CustomText
                text={
                  "We have received your request for the book. We will find it as soon as possible and notify you as it’s available"
                }
                textAlign="center"
                marginTop={10}
                color={Colors.gray}
              />
            </View>
            <CustomButton
              title="Back to Home"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("BottomTab");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RequestBookScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  content: {
    flex: 1,
    gap: verticalScale(15),
    justifyContent: "space-between",
  },
  inputs: {
    gap: verticalScale(10),
    justifyContent: "space-between",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: verticalScale(45),
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    backgroundColor: "#FFFFFF",
    marginVertical: verticalScale(10),
  },
  flagArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(10),
  },
  ArrowDown: {
    width: scale(20),
    height: verticalScale(20),
  },
  phoneInput: {
    width: scale(200),
    height: verticalScale(45),
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  countryCode: {
    marginRight: scale(10), // Space between code and phone input
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modal: {
    // width: 300,
    //height: 400,
    width: s(250),
    height: vs(350),
    paddingHorizontal: s(20),
    paddingVertical: s(30),
    backgroundColor: Colors.white,
    borderRadius: s(10),
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  modalContent: {
    alignItems: "center",
  },
  gift: {
    // width: 96,
    width: s(96),
    // height: 96,
    height: vs(80),
    marginTop: vs(10),
    marginBottom: vs(30),
  },
});
