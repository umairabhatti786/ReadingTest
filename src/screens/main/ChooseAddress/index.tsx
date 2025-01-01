import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { AddressesData } from "../../../utils/Data/data";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
interface ChooseAddressProps {
  navigation: StackNavigationProp<RootStackParamsList, "ChooseAddress">;
}

const ChooseAddress = ({ navigation }: ChooseAddressProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.layout}>
        <Header title="Choose Address" onPress={() => navigation.goBack()} />
        <CustomText text={"Saved Addresses"} fontWeight="bold" size={18} />
      </View>
      {/* ..........adresses.................. */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          //marginVertical: vs(15),
          paddingHorizontal: s(20),
          gap: s(7),
          flexGrow: 0,
        }}
        style={{ marginVertical: vs(15), flexGrow: 0 }}
      >
        {AddressesData.map((addresses, index) => (
          <View key={addresses.id} style={styles.addressVw}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CustomText text={addresses.house} fontWeight="bold" />
              <TouchableOpacity
                style={styles.circle}
                onPress={() => setSelected(index)}
              >
                {selected === index && <View style={styles.select} />}
              </TouchableOpacity>
            </View>
            <View>
              <CustomText text={addresses.city} size={12} color={Colors.gray} />
              <CustomText text={addresses.code} size={12} color={Colors.gray} />
              <CustomText
                text={addresses.phone}
                size={12}
                color={Colors.gray}
              />
              <CustomText
                text={addresses.email}
                size={12}
                color={Colors.gray}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      {/* ......................Add New Address +.................. */}
      <TouchableOpacity
        onPress={() => navigation.navigate("NewAddress")}
        style={styles.addbtn}
      >
        <CustomText
          text={"Add New Address +"}
          color={Colors.blue}
          fontWeight="bold"
        />
      </TouchableOpacity>
      <View style={[styles.layout, { flex: 1, justifyContent: "flex-end" }]}>
        <CustomButton title="Select" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default ChooseAddress;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginTop: vs(20),
    justifyContent: "space-between",
  },
  layout: {
    marginHorizontal: s(20),
    gap: vs(15),
  },
  addbtn: {
    marginHorizontal: s(20),
  },
  addressVw: {
    backgroundColor: Colors.white,
    width: s(292),
    height: vs(120),
    padding: ms(15),
    borderRadius: ms(10),
    gap: vs(15),
  },
  circle: {
    height: vs(16),
    width: s(16),
    borderRadius: ms(100),
    borderWidth: s(2),
    borderColor: Colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    height: vs(8),
    width: s(8),
    borderRadius: ms(100),
    backgroundColor: Colors.orange,
  },
});
