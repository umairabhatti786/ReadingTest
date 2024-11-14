import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";
import CountryPicker, { Country } from "react-native-country-picker-modal";
//.....................types.....................
interface PersonalInfoScreen {
  navigation: StackNavigationProp<RootStackParamsList, "PersonalInfoScreen">;
}

//............................main func....................

const PersonalInfoScreen = ({ navigation }: PersonalInfoScreen) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header title="Personal Info" />
          <CustomText
            text={
              "You know plenty about readings. It’s our turn to know a little about you."
            }
          />
          <CustomTextInput placeholder="Name" />
          <CustomTextInput placeholder="Address" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="City" width={scale(150)} />
            <CustomTextInput placeholder="State/Province" width={scale(150)} />
          </View>
          <CustomTextInput placeholder="Country" rightIcon={icons.ArrowDown} />
          <CustomTextInput placeholder="ZIP Code" />
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

          {/* ..............Map................ */}
          <View style={styles.map} />

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText text={"skip"} color={Colors.blue} />
          </TouchableOpacity>

          <CustomButton title="Continue" marginTop={10} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  content: {
    gap: verticalScale(5),
    justifyContent: "space-between",
  },
  map: {
    height: verticalScale(240),
    backgroundColor: Colors.gray,
    marginVertical: verticalScale(10),
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
});
