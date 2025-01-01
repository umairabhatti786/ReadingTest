import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { vs, s, ms } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
import CustomText from "../../../components/CustomText";
import { odersHistoryData } from "../../../utils/Data/data";

type OrdersNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "Orders">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;

interface OrdersProps {
  navigation: OrdersNavigationProp;
}

// Main Component
const Orders = ({ navigation }: OrdersProps) => {
  const [selected, setSelected] = useState("Active");

  return (
    <View style={styles.screenContainer}>
      <View style={styles.layout}>
        <HeaderBtmTabs navigation={navigation} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.btn,
              selected === "Active" && styles.active,
              { borderTopLeftRadius: ms(10), borderBottomLeftRadius: ms(10) },
            ]}
            onPress={() => setSelected("Active")}
          >
            <CustomText
              text="Active"
              color={selected === "Active" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btn,
              selected === "History" && styles.active,
              { borderTopRightRadius: ms(10), borderBottomRightRadius: ms(10) },
            ]}
            onPress={() => setSelected("History")}
          >
            <CustomText
              text="History"
              color={selected === "History" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>
        </View>
        {selected === "Active" ? (
          <View>
            <View style={styles.orderDetails}>
              <View>
                <CustomText text="ORDER123456" fontWeight={"bold"} />
                <CustomText
                  text="Amount: Rs. 4000"
                  size={12}
                  color={Colors.gray}
                />
                <CustomText
                  text="Order Received"
                  size={12}
                  color={Colors.orange}
                />
              </View>
              <TouchableOpacity style={styles.detailsBtn}>
                <CustomText text="Details" color={Colors.blue} />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
        ) : null}
        {selected === "History" ? (
          <View>
            {odersHistoryData.map((item) => (
              <View key={item.id}>
                <View style={styles.orderDetails}>
                  <View>
                    <CustomText text={item.orderNo} fontWeight={"bold"} />
                    <CustomText
                      text={item.Amount}
                      size={12}
                      color={Colors.gray}
                    />
                    <CustomText
                      text={item.status}
                      size={12}
                      color={Colors.orange}
                    />
                  </View>
                  <TouchableOpacity style={styles.detailsBtn}>
                    <CustomText text="Details" color={Colors.blue} />
                  </TouchableOpacity>
                </View>
                <View style={styles.line} />
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Orders;

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
  buttonContainer: {
    flexDirection: "row",
    borderRadius: ms(10),
  },
  btn: {
    width: "50%",
    // flex: 1, // Buttons take equal space
    height: vs(45),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  active: {
    backgroundColor: Colors.blue,
  },
  orderDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsBtn: {
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    height: vs(45),
    width: s(100),
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    borderWidth: 1,
    marginVertical: vs(5),
    borderColor: "#E3E5E7",
  },
});
