import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { Colors } from "../../../utils/Colors";
import CustomButton from "../../../components/CustomButton";

const SendGiftCardScreen = () => {
  const cards = [
    {
      id: 1,
      cardNumber: "----  ----  ----  1234",
    },
    {
      id: 2,
      cardNumber: "----  ----  ----  1234",
    },
  ];
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenContainer}
    >
      <Header title="Send Gift Card" />
      <CustomText
        text={"Add your gift recipient details below."}
        marginVertical={verticalScale(10)}
      />
      <CustomTextInput placeholder="Recipient Name" />
      <CustomTextInput placeholder="Recipient Email" />
      <CustomTextInput
        placeholder="+92 345 123 456 7"
        icon={icons.ArrowDown}
        placeholderTextColor={Colors.black}
      />
      <CustomText
        text={"Add/update your details below"}
        marginTop={verticalScale(20)}
      />
      <CustomTextInput placeholder="John Doe" />
      <CustomTextInput placeholder="johndoe121@gmail.com" />
      <CustomTextInput placeholder="+92 345 123 456 7" icon={icons.ArrowDown} />
      <CustomText
        text={"Gift Card Amount ( Online Payment Only )"}
        fontWeight="bold"
      />
      <CustomTextInput placeholder="Amount(PKR 500 - 10,000)" />
      <CustomText text={"Card Details"} marginVertical={verticalScale(20)} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          {
            //marginBottom: verticalScale(10),
          }
        }
      >
        {cards.map((cards, index) => (
          <View key={cards.id} style={styles.card}>
            <CustomTextInput
              placeholder="----  ----  ----  1234"
              icon={icons.visa2}
            />
            <TouchableOpacity
              style={styles.circle}
              onPress={() => setSelected(index)}
            >
              {selected === index && <View style={styles.select} />}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity>
        <CustomText text={"Add New Card +"} color={Colors.blue} />
      </TouchableOpacity>
      {/* ............................................... */}
      <CustomTextInput placeholder="Card Nuumber" rightIcon={icons.visa} />
      <CustomTextInput placeholder="Card Nuumber" rightIcon={icons.visa} />
      <CustomTextInput placeholder="Card Holder Name" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomTextInput placeholder="06 / 27" width={scale(163)} />
        <CustomTextInput placeholder="CVC" width={scale(163)} />
      </View>
      <CustomTextInput placeholder="Address" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomTextInput placeholder="City" width={scale(163)} />
        <CustomTextInput placeholder="State/Province" width={scale(163)} />
      </View>
      <CustomTextInput placeholder="Country" />
      <CustomTextInput placeholder="ZIP Code" />
      <CustomButton title="Continue" />
    </ScrollView>
  );
};

export default SendGiftCardScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
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
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: verticalScale(60),
    width: scale(282),
    backgroundColor: Colors.white,
  },
});
