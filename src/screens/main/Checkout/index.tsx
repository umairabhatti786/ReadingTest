import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { AddressesData, CartItemsData } from "../../../utils/Data/data";
import icons from "../../../assets/icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import BankCards from "../../../components/BankCards";
// ..................types.....................
interface CheckoutProps {
  navigation: StackNavigationProp<RootStackParamsList, "Checkout">;
}
//............................main func....................
const Checkout = ({ navigation }: CheckoutProps) => {
  const myAdress = AddressesData[0];
  const [selected, setSelected] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [onlinePaymentMethod, setOnlinePaymentMethod] = useState<string | null>(
    null
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <Header title="Checkout" onPress={() => navigation.goBack()} />
          <CustomText text="Add your optional payment method to save for future purchases." />
          {/* ..............select Address.......... */}
          <View style={styles.addressVw}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CustomText text={myAdress.house} fontWeight="bold" />
              <TouchableOpacity
                style={styles.circle}
                onPress={() => setSelected(!selected)}
              >
                {selected && <View style={styles.select} />}
              </TouchableOpacity>
            </View>
            <View>
              <CustomText
                text={`${myAdress.city}, ${myAdress.country}`}
                size={12}
                color={Colors.gray}
              />
              <CustomText text={myAdress.code} size={12} color={Colors.gray} />
              <CustomText text={myAdress.phone} size={12} color={Colors.gray} />
              <CustomText text={myAdress.email} size={12} color={Colors.gray} />
            </View>
          </View>
          {/* ......................Add New Address +.................. */}
          <TouchableOpacity onPress={() => navigation.navigate("NewAddress")}>
            <CustomText
              text={"Add New Address +"}
              color={Colors.blue}
              fontWeight="bold"
            />
          </TouchableOpacity>
          {/* .......Billing address.............. */}
          <View>
            <CustomText text="Billing address" size={18} fontWeight={"bold"} />
            <TouchableOpacity
              style={styles.billAddressVw}
              onPress={() => setBillingAddress(!billingAddress)}
            >
              <Image
                source={billingAddress ? icons.selected : icons.notSelect}
                style={styles.billAddressIcon}
              />
              <CustomText
                text="My billing address is same as shipping address"
                size={12}
              />
            </TouchableOpacity>
            {!billingAddress && (
              <TouchableOpacity
                onPress={() => navigation.navigate("NewAddress")}
                style={{ marginTop: vs(10) }}
              >
                <CustomText
                  text={"Add Biling Address +"}
                  color={Colors.blue}
                  fontWeight="bold"
                />
              </TouchableOpacity>
            )}
          </View>
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

                {onlinePaymentMethod == "Card" && (
                  <View>
                    <BankCards />
                    <TouchableOpacity
                      onPress={() => navigation.navigate("PaymentScreen2")}
                      style={{ marginTop: vs(10) }}
                    >
                      <CustomText
                        text={"Add New Card +"}
                        color={Colors.blue}
                        fontWeight="bold"
                      />
                    </TouchableOpacity>
                  </View>
                )}
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
                        <CustomText
                          text="Elan Vital Private Limited"
                          size={12}
                        />
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
                        <CustomText
                          text="Branch"
                          size={12}
                          color={Colors.gray}
                        />
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
                      <CustomText
                        text="JazzCash"
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
                        <CustomText
                          text="Elan Vital Private Limited"
                          size={12}
                        />
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
                        <CustomText
                          text="Elan Vital Private Limited"
                          size={12}
                        />
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
          {/* ................cart item.......................... */}
          {CartItemsData.map((item) => (
            <View style={styles.cartItem}>
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

          {/* .............Promo.................. */}
          <View style={styles.promoVw}>
            <View style={{ flex: 1 }}>
              <CustomTextInput placeholder="Promo" />
            </View>
            <TouchableOpacity style={styles.applyBtn}>
              <CustomText text="Apply" color={Colors.white} />
            </TouchableOpacity>
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
              <CustomText text="Shipping" />
              <CustomText text="Rs.2335" />
            </View>
          </View>
        </ScrollView>
        {/* ............Bottom..Btns................ */}
        <View style={styles.btnsVw}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="Total" fontWeight={"bold"} size={18} />
            <CustomText text="Rs.2335" fontWeight={"bold"} size={16} />
          </View>
          <CustomButton title="Place Order" />
        </View>
        {/* ...............end............... */}
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: s(20),
    marginTop: vs(20),
  },
  scroll: {
    marginTop: vs(20),
    gap: vs(15),
    paddingBottom: ms(160),
  },
  addressVw: {
    backgroundColor: Colors.white,
    height: vs(100),
    //height: 120,
    padding: ms(15),
    borderRadius: ms(10),
    gap: vs(5),
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
  //.....end buttons
  btnsVw: {
    backgroundColor: Colors.primary,
    paddingTop: vs(10),
    paddingBottom: vs(30),
    position: "absolute",
    bottom: 0,
    width: "100%",
    gap: vs(10),
  },
  //......Promo
  promoVw: {
    height: vs(45),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  applyBtn: {
    backgroundColor: Colors.blue,
    width: s(90),
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: ms(10),
    borderTopRightRadius: ms(10),
  },
  //...Subtotal
  SubtotalVw: {
    height: vs(80),
    backgroundColor: Colors.white,
    padding: ms(15),
    gap: vs(10),
    borderRadius: ms(10),
  },
  bankTransfer: {
    backgroundColor: Colors.white,
    padding: ms(15),
    gap: vs(5),
  },
});
