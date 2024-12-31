import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
} from "react-native";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { ms, s, vs } from "react-native-size-matters";
import icons from "../../../assets/icons";
import imgs from "../../../assets/imgs";
import { Colors } from "../../../utils/Colors";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
//...for country selection...........
import CountryPicker, { Country } from "react-native-country-picker-modal";
import CountryDropDown from "../../../components/CountryDropDown";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import ModalScreen from "../../../components/ModalScreen";
import { bankCards } from "../../../utils/Data/data";
import BankCards from "../../../components/BankCards";

// ..................types.....................

interface SendGiftCardScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "SendGiftCardScreen">;
}

//............................main func....................
const SendGiftCardScreen = ({ navigation }: SendGiftCardScreenProps) => {
  const [cardSelected, setCardSelected] = useState<number | null>(null);
  //...for country selection...........
  const [RecipientCountry, setRecipientCountry] = useState<Country | null>({
    cca2: "PK", // Country code for Pakistan
    callingCode: ["92"], // Default calling code for Pakistan
    name: "Pakistan", // Country name
    region: "Asia", // Region
    subregion: "Southern Asia", // Subregion
    currency: ["PKR"], // Currency
    flag: "flag-pk", // Flag (usually used in react-native-country-picker-modal)
  });
  const [isRecipientCountryPickerVisible, setIsRecipientCountryPickerVisible] =
    useState(false);
  const [country, setCountry] = useState<Country | null>({
    //..for sender
    cca2: "PK", // Country code for Pakistan
    callingCode: ["92"], // Default calling code for Pakistan
    name: "Pakistan", // Country name
    region: "Asia", // Region
    subregion: "Southern Asia", // Subregion
    currency: ["PKR"], // Currency
    flag: "flag-pk", // Flag (usually used in react-native-country-picker-modal)
  });
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  //.......for new card entry........
  const [addNewCard, setAddNewCard] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenContainer}
    >
      <View style={styles.content}>
        <Header title="Send Gift Card" onPress={() => navigation.goBack()} />

        {/* //..recipient details.............................. */}
        <CustomText
          text={"Add your gift recipient details below."}
          style={{ marginTop: vs(10) }}
        />
        <View style={{ gap: vs(20), marginVertical: vs(40) }}>
          <CustomTextInput placeholder="Recipient Name" />
          <CustomTextInput placeholder="Recipient Email" />
          {/* ..........Country Picker Modal for recipient.......... */}
          <View style={styles.countryContainer}>
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              countryCode={RecipientCountry?.cca2 || "PK"}
              visible={isRecipientCountryPickerVisible}
              onSelect={(selectedCountry) => {
                setRecipientCountry(selectedCountry);
                setIsCountryPickerVisible(false);
              }}
              onClose={() => setIsRecipientCountryPickerVisible(false)}
            />
            <Image source={icons.ArrowDown} style={styles.ArrowDown} />
            {RecipientCountry && (
              <CustomText
                text={` +${
                  RecipientCountry.callingCode
                    ? RecipientCountry.callingCode[0]
                    : "+92"
                }`}
                style={styles.countryCode}
              />
            )}
            <TextInput
              placeholder="345 123 456 7"
              style={styles.phoneInput}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* //..update your details................................. */}
        <CustomText
          text={"Add/update your details below"}
          style={{ marginBottom: vs(10) }}
        />
        <View style={{ gap: vs(20) }}>
          <CustomTextInput placeholder="John Doe" />
          <CustomTextInput placeholder="johndoe121@gmail.com" />
          {/* ..................Country Picker Modal.......... */}
          <View style={styles.countryContainer}>
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              countryCode={country?.cca2 || "PK"}
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
        </View>

        {/* .......Gift Card Amount............................ */}
        <View style={{ marginVertical: vs(40), gap: vs(15) }}>
          <CustomText
            text={"Gift Card Amount ( Online Payment Only )"}
            fontWeight="bold"
          />
          <CustomTextInput placeholder="Amount(PKR 500 - 10,000)" />
        </View>
      </View>
      {/* ....................New Card details +........................... */}
      {addNewCard ? (
        <View style={styles.newCard}>
          <CustomText text={"Card Details"} fontWeight={"bold"} />
          <CustomTextInput
            placeholder="Card Number"
            rightIcon={icons.visa}
            rightIconWidth={40}
          />
          <CustomTextInput placeholder="Card Holder Name" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="06 / 27" width={s(150)} />
            <CustomTextInput placeholder="CVC" width={s(150)} />
          </View>
          <CustomTextInput placeholder="Address" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="City" width={s(150)} />
            <CustomTextInput placeholder="State/Province" width={s(150)} />
          </View>
          <CountryDropDown />
          <CustomTextInput placeholder="ZIP Code" />
        </View>
      ) : (
        //...select card...................
        <View>
          {/* //................Card select............... */}
          <CustomText
            text={"Card Details"}
            fontWeight={"bold"}
            style={{ marginHorizontal: s(20) }}
          />
          <BankCards />
          <TouchableOpacity
            onPress={() => setAddNewCard(true)}
            style={styles.newCardBtn}
          >
            <CustomText
              text={"Add New Card "}
              color={Colors.blue}
              fontWeight={"bold"}
            />
            <Image source={icons.Plus} style={styles.plus} />
          </TouchableOpacity>
        </View>
      )}

      <CustomButton
        title="Send Request"
        onPress={() => setModalVisible(true)}
        // width="calc(100% - 40px)"
        width={"90%"}
        // buttonStyle={{ marginHorizontal: vs(20) }}
      />
      {/* ............Send Request...Modal..................... */}
      <Modal
        animationType="slide" // Options: 'none', 'slide', 'fade'
        transparent={true} // Makes modal background transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Handles back button on Android
      >
        <ModalScreen
          img={imgs.gift}
          heading="Gift Sent"
          status="Your Gift Card is on its way to Rebecca and you both will be notify as she received. Usually takes 3 hours to arrive."
          btnTitle="center"
          onPress={() => {
            // setModalVisible(false);
            navigation.navigate("BottomTab");
          }}
        />
      </Modal>
    </ScrollView>
  );
};

export default SendGiftCardScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginBottom: vs(20),
  },
  content: {
    marginHorizontal: s(20),
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
  cards: {
    marginTop: vs(10),
    paddingHorizontal: s(20),
    gap: s(10),
  },
  card: {
    flexDirection: "row",
    height: vs(50),
    width: s(240),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    alignItems: "center",
  },

  newCard: {
    gap: vs(20),
    marginHorizontal: s(20),
    marginBottom: vs(20),
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: vs(45),
    padding: ms(10),
    borderRadius: ms(15),
    backgroundColor: Colors.white,
  },
  ArrowDown: {
    width: s(20),
    height: vs(20),
  },
  plus: {
    width: s(10),
    height: vs(10),
    marginLeft: s(2),
  },
  newCardBtn: {
    marginVertical: vs(10),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: s(20),
  },
  countryCode: {
    marginRight: s(10), // Space between code and phone input
  },
  phoneInput: {
    width: s(200),
    height: vs(45),
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
