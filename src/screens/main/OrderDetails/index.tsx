import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import Header from "../../../components/Header";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import CustomText from "../../../components/CustomText";
import { CartItemsData } from "../../../utils/Data/data";
import CustomButton from "../../../components/CustomButton";
//.....................types.....................
interface OrderDetailsProps {
  navigation: StackNavigationProp<RootStackParamsList, "OrderDetails">;
}

//............................main func....................

const OrderDetails = ({ navigation }: OrderDetailsProps) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.layout}>
        <Header title="Order Details" onPress={() => navigation.goBack()} />

        <View style={styles.status}>
          <CustomText text="ORDER123456" fontWeight={"bold"} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="ETA" size={12} color={Colors.gray} />
            <CustomText text="2 days (Approximately)" size={12} />
          </View>
          <CustomText text="2 days (Approximately)" size={12} />
        </View>
        <View style={{ gap: vs(5) }}>
          <CustomText text="Order Content" fontWeight={"bold"} />
          {/* ................cart item.......................... */}
          {CartItemsData.map((item) => (
            <View style={styles.cartItem} key={item.id}>
              <ImageBackground source={item.bookCover} style={styles.imgBG}>
                <View style={styles.overlay} />
                <Image source={item.bookCover} style={styles.img} />
              </ImageBackground>
              <View
                style={{
                  margin: ms(10),
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <CustomText text={item.bookTitle} fontWeight={"bold"} />
                  <CustomText
                    text={`${item.AppPrice.currency}${item.AppPrice.value}`}
                    fontWeight={"bold"}
                  />
                </View>
                <CustomText text={item.author} size={12} color={Colors.gray2} />
                <CustomText text={`Qty. ${item.quantity}`} />
              </View>
            </View>
          ))}
        </View>
        {/* ...............Subtotal............... */}
        <View style={styles.SubtotalVw}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="Subtotal" />
            <CustomText text="Rs.2335" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="Discounts" />
            <CustomText text="Rs.00" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="Shipping (Standard)" />
            <CustomText text="Rs.200" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="Total" size={20} fontWeight={"bold"} />
            <CustomText text="Rs.2335" size={20} fontWeight={"bold"} />
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: s(20) }}>
        <CustomButton title="Track Live" />
      </View>
    </View>
  );
};

export default OrderDetails;

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
  status: {
    backgroundColor: Colors.white,
    borderRadius: s(10),
    padding: ms(10),
    gap: vs(10),
  },
  //   .............cart.............
  cartItem: {
    height: 85,
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    overflow: "hidden",
    flexDirection: "row",
  },
  imgBG: {
    width: s(62),
    height: vs(85),
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    ...StyleSheet.absoluteFillObject, // This makes the overlay fill the entire ImageBackground
  },
  img: {
    height: vs(52),
    width: s(34),
  },
  SubtotalVw: {
    // height: vs(80),
    backgroundColor: Colors.white,
    padding: ms(15),
    gap: vs(15),
    borderRadius: ms(10),
  },
});
