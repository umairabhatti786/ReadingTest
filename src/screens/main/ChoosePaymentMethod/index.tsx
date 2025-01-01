import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import BankCards from "../../../components/BankCards";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import CustomButton from "../../../components/CustomButton";
interface ChoosePaymentMethodProps {
  navigation: StackNavigationProp<RootStackParamsList, "ChoosePaymentMethod">;
}

const ChoosePaymentMethod = ({ navigation }: ChoosePaymentMethodProps) => {
  const [selected, setSelected] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [onlinePaymentMethod, setOnlinePaymentMethod] = useState<string | null>(
    null
  );
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Header
          title="Choose Payment Method"
          onPress={() => navigation.goBack()}
        />
        <CustomText
          text="Saved Payment Methods"
          size={18}
          fontWeight={"bold"}
        />
        {/* .......Payment Method.............. */}
        <View style={{ gap: vs(10) }}>
          <CustomText text="Payment Method" size={18} fontWeight={"bold"} />
          <TouchableOpacity
            style={styles.billAddressVw}
            onPress={() => setPaymentMethod("Online")}
          >
            <View style={styles.circle}>
              {paymentMethod == "Online" && <View style={styles.select} />}
            </View>
            <CustomText
              text="Online Payment (Debit, Credit, Paypak)"
              size={12}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.billAddressVw}
            onPress={() => setPaymentMethod("COD")}
          >
            <View style={styles.circle}>
              {paymentMethod == "COD" && <View style={styles.select} />}
            </View>
            <CustomText text="Cash on Delivery" size={12} />
          </TouchableOpacity>

          {paymentMethod == "Online" && (
            <View style={{ gap: vs(10) }}>
              <CustomText
                text="Please choose an online payment method."
                color={Colors.gray}
              />
              <TouchableOpacity
                style={styles.billAddressVw}
                onPress={() => setOnlinePaymentMethod("Card")}
              >
                <View style={styles.circle}>
                  {onlinePaymentMethod == "Card" && (
                    <View style={styles.select} />
                  )}
                </View>
                <CustomText text="Card" size={12} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.billAddressVw}
                onPress={() => setOnlinePaymentMethod("Bank Transfer")}
              >
                <View style={styles.circle}>
                  {onlinePaymentMethod == "Bank Transfer" && (
                    <View style={styles.select} />
                  )}
                </View>
                <CustomText text="Bank Transfer" size={12} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.billAddressVw}
                onPress={() => setOnlinePaymentMethod("Jazzcash / Easypaisa")}
              >
                <View style={styles.circle}>
                  {onlinePaymentMethod == "Jazzcash / Easypaisa" && (
                    <View style={styles.select} />
                  )}
                </View>
                <CustomText text="Jazzcash / Easypaisa" size={12} />
              </TouchableOpacity>

              {onlinePaymentMethod == "Card" && <BankCards />}
              {onlinePaymentMethod == "Bank Transfer" && (
                <View style={{ gap: vs(10) }}>
                  <CustomText
                    text="To make an online payment, please choose a convenient bank option from below. Click to copy Account No. / IBAN."
                    size={12}
                    color={Colors.gray}
                  />
                  <View style={styles.bankTransfer}>
                    <CustomText
                      text="Allied Bank"
                      size={18}
                      fontWeight={"bold"}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="Title of Account"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="Elan Vital Private Limited" size={12} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="Account No"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="02160010070305740013" size={12} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="IBAN No"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="PK19ABPA0010070305740013" size={12} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText text="Branch" size={12} color={Colors.gray} />
                      <CustomText
                        text="Main Market Gulberg Branch, Lahore"
                        size={12}
                      />
                    </View>
                  </View>
                </View>
              )}
              {onlinePaymentMethod == "Jazzcash / Easypaisa" && (
                <View style={{ gap: vs(10) }}>
                  <CustomText
                    text="Enter your Jazzcash/easypaisa account below."
                    size={12}
                    color={Colors.gray}
                  />
                  <View style={styles.bankTransfer}>
                    <CustomText text="JazzCash" size={18} fontWeight={"bold"} />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="Title of Account"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="Elan Vital Private Limited" size={12} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="Phone Number"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="0301-1555527" size={12} />
                    </View>
                    <CustomText
                      text="EasyPaisa"
                      size={18}
                      fontWeight={"bold"}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="Title of Account"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="Elan Vital Private Limited" size={12} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomText
                        text="Phone Number"
                        size={12}
                        color={Colors.gray}
                      />
                      <CustomText text="0301-1555527" size={12} />
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
        {/* ......................Add New Address +.................. */}
        <TouchableOpacity onPress={() => navigation.navigate("NewAddress")}>
          <CustomText
            text={"Add New Address +"}
            color={Colors.blue}
            fontWeight="bold"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", marginHorizontal: s(20) }}
      >
        <CustomButton title="Select" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default ChoosePaymentMethod;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: s(20),
    marginTop: vs(20),
    gap: vs(15),
  },
  addressVw: {
    backgroundColor: Colors.white,
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
  billAddressIcon: {
    width: s(20),
    height: s(20),
  },
  billAddressVw: {
    flexDirection: "row",
    gap: s(5),
    marginTop: vs(5),
    alignItems: "center",
  },
  bankTransfer: {
    backgroundColor: Colors.white,
    padding: ms(15),
    gap: vs(5),
  },
});
