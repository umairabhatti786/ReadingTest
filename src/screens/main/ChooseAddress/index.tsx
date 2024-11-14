import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";

interface ChooseAddressProps {
  navigation: StackNavigationProp<RootStackParamsList, "ChooseAddress">;
}

const ChooseAddress = ({ navigation }: ChooseAddressProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const addresses = [
    {
      id: 1,
      title: "359 American Scheme Block B9",
      details: "Lahore, Pakistan,54009,+92 345 678 9012,email@example.com",
    },
    {
      id: 2,
      title: "123 Another Street Block A",
      details: "Karachi, Pakistan,54001,+92 123 456 7890,another@example.com",
    },
  ];

  return (
    <View style={styles.screenContainer}>
      <View>
        <Header title="Choose Address" />
        <CustomText
          text={"Saved Addresses"}
          fontWeight="bold"
          size={18}
          marginVertical={verticalScale(15)}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginBottom: verticalScale(10),
          }}
        >
          {addresses.map((addresses, index) => (
            <View key={addresses.id} style={styles.addressVw}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomText text={addresses.title} fontWeight="bold" />
                <TouchableOpacity
                  style={styles.circle}
                  onPress={() => setSelected(index)}
                >
                  {selected === index && <View style={styles.select} />}
                </TouchableOpacity>
              </View>
              <CustomText text={addresses.details} size={12} />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("NewAddress")}>
          <CustomText
            text={"Add New Address +"}
            color={Colors.blue}
            fontWeight="bold"
          />
        </TouchableOpacity>
      </View>
      <CustomButton title="Select" />
    </View>
  );
};

export default ChooseAddress;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    justifyContent: "space-between",
  },
  addressVw: {
    backgroundColor: Colors.white,
    width: scale(292),
    height: verticalScale(120),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    marginRight: verticalScale(5),
  },
  circle: {
    height: verticalScale(16),
    width: scale(16),
    borderRadius: moderateScale(100),
    borderWidth: scale(2),
    borderColor: Colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    height: verticalScale(8),
    width: scale(8),
    borderRadius: moderateScale(100),
    backgroundColor: Colors.orange,
  },
});
