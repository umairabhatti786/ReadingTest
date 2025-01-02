import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText";
import { Colors } from "../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import { AddressesData } from "../../utils/Data/data";
const Addresses = () => {
  const [adressSelected, setAdressSelected] = useState<number | null>(null);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addressScroll}
    >
      {AddressesData.map((item, index) => (
        <View key={item.id} style={styles.address}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomText text={item.house} fontWeight="bold" />
            <TouchableOpacity
              style={styles.circle}
              onPress={() => setAdressSelected(index)}
            >
              {adressSelected === index && <View style={styles.select} />}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: vs(5) }}>
            <CustomText
              text={`${item.city}, ${item.country}`}
              size={12}
              color={Colors.gray}
            />
            <CustomText
              text={item.code.toString()}
              size={12}
              color={Colors.gray}
            />
            <CustomText
              text={item.phone.toString()}
              size={12}
              color={Colors.gray}
            />
            <CustomText text={item.email} size={12} color={Colors.gray} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  addressScroll: {
    flexDirection: "row",
    gap: s(7),
    paddingHorizontal: s(20),
  },
  address: {
    height: vs(100),
    width: s(250),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(10),
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
