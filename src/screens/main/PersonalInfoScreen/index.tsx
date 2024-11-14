import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
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
interface PersonalInfoScreen {
  navigation: StackNavigationProp<RootStackParamsList, "PersonalInfoScreen">;
}

//............................main func....................

const PersonalInfoScreen = ({ navigation }: PersonalInfoScreen) => {
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

          <CustomTextInput
            placeholder="+92 345 123 456 7"
            icon={icons.ArrowDown}
          />

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
});
