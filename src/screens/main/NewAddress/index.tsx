import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { ms, s, vs } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import CountryDropDown from "../../../components/CountryDropDown";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; //.....................

interface NewAddressProps {
  navigation: StackNavigationProp<RootStackParamsList, "NewAddress">;
}
const NewAddress = ({ navigation }: NewAddressProps) => {
  //...for country selection...........
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [country, setCountry] = useState<Country | null>({
    // default country
    cca2: "PK", // Country code for Pakistan
    callingCode: ["92"],
    name: "Pakistan",
    region: "Asia",
    subregion: "Southern Asia",
    currency: ["PKR"],
    flag: "flag-pk",
  });
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header title="New Address" onPress={() => navigation.goBack()} />
          <CustomText
            text={"Enter the new address by filling the following information."}
          />
          <CustomTextInput placeholder="Email" />
          {/* ..................Country Picker Modal.......... */}
          <View style={styles.countryContainer}>
            <TouchableOpacity
              onPress={() => setIsCountryPickerVisible(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
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
            </TouchableOpacity>
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
          <CustomTextInput placeholder="Address" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="City" width={s(150)} />
            <CustomTextInput placeholder="State/Province" width={s(150)} />
          </View>
          <CountryDropDown />
          <CustomTextInput placeholder="ZIP Code" />
          {/* ..............Map................ */}
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            />
          </View>
          <CustomButton title="Continue" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    gap: vs(20),
    marginHorizontal: s(20),
    marginBottom: vs(20),
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
  mapContainer: {
    height: vs(210),
    width: "100%",
    borderRadius: ms(10),
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
});
