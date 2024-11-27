import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import CustomText from "../../../components/CustomText";
import icons from "../../../assets/icons";
import CustomTextInput from "../../../components/CustomTextInput";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import imgs from "../../../assets/imgs";
import CustomButton from "../../../components/CustomButton";

// ..................types.....................

interface ProfileProps {
  navigation: StackNavigationProp<RootStackParamsList, "Profile">;
}

//............................main func....................
const Profile = ({ navigation }: ProfileProps) => {
  const Addresses = [
    {
      id: "1",
      house: "359 American Scheme Block B9",
      city: "Lahore",
      country: "Pakistan",
      code: 54009,
      phone: +923456789012,
      email: "email@example.com",
    },
    {
      id: "2",
      house: "359 American Scheme Block B9",
      city: "Lahore",
      country: "Pakistan",
      code: 54009,
      phone: +923456789012,
      email: "email@example.com",
    },
    {
      id: "3",
      house: "359 American Scheme Block B9",
      city: "Lahore",
      country: "Pakistan",
      code: 54009,
      phone: +923456789012,
      email: "email@example.com",
    },
    {
      id: "4",
      house: "359 American Scheme Block B9",
      city: "Lahore",
      country: "Pakistan",
      code: 54009,
      phone: +923456789012,
      email: "email@example.com",
    },
  ];
  const [adressSelected, setAdressSelected] = useState<number | null>(null);
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Header title="Profile" onPress={() => navigation.goBack()} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <CustomText text={"Delete Account"} color={Colors.red} />
          </TouchableOpacity>
        </View>
        {/* ..................info.................. */}
        <View style={styles.infoVw}>
          <View style={styles.info}>
            <CustomText text={"Name"} color={Colors.gray} />
            <CustomText text={"Jack Doe"} />
          </View>
          <View style={styles.info}>
            <CustomText text={"Email"} color={Colors.gray} />
            <CustomText text={"email@example.com"} />
          </View>
          <View style={styles.info}>
            <CustomText text={"Phone number"} color={Colors.gray} />
            <CustomText text={"+92 300 1234567"} />
          </View>
        </View>
        {/* ................btns.............. */}
        <View style={styles.info}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <CustomText text={"Change Password"} color={Colors.blue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <CustomText text={"Edit Info"} color={Colors.blue} />
          </TouchableOpacity>
        </View>
        {/* ....................Saved Addresses.................. */}
        <View style={styles.newAddressVw}>
          <CustomText text={"Saved Addresses"} size={18} fontWeight="bold" />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.addressScroll}
          >
            {Addresses.map((item, index) => (
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
                    text={item.city && "," && item.country}
                    size={12}
                    color={Colors.gray}
                  />
                  <CustomText text={item.code} size={12} color={Colors.gray} />
                  <CustomText text={item.phone} size={12} color={Colors.gray} />
                  <CustomText text={item.email} size={12} color={Colors.gray} />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* .................Add New Address..................... */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: vs(10),
          }}
        >
          <CustomText
            text={"Add New Address "}
            fontWeight="bold"
            color={Colors.blue}
          />
          <Image source={icons.Plus} style={styles.plus} />
        </TouchableOpacity>
        {/* //................Card Details............... */}
        <CustomText
          text={"Payment Methods"}
          marginTop={15}
          size={18}
          fontWeight="bold"
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cards}
        >
          {cards.map((cards, index) => (
            <View key={cards.id} style={styles.card}>
              {/* <CustomTextInput
                placeholder={cards.cardNumber}
                icon={icons.visa2}
                height={60}
                iconHeight={40}
                iconWidth={40}
              /> */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={icons.visa2} style={styles.visa2} />
                <CustomText text={cards.cardNumber} marginLeft={10} />
              </View>
              <TouchableOpacity>
                <Image source={icons.Dots} style={styles.dots} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* ..................Add New Method.................... */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: vs(10),
          }}
        >
          <CustomText
            text={"Add New Method "}
            fontWeight="bold"
            color={Colors.blue}
          />
          <Image source={icons.Plus} style={styles.plus} />
        </TouchableOpacity>
        {/* ...............Modal..................... */}
        <Modal
          animationType="slide" // Options: 'none', 'slide', 'fade'
          transparent={true} // Makes modal background transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Handles back button on Android
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <Image
                  source={imgs.delete}
                  width={s(96)}
                  height={vs(96)}
                  style={styles.gift}
                />
                <CustomText
                  text={"Delete Account?"}
                  fontWeight="bold"
                  size={20}
                />
                <CustomText
                  text={
                    "You are about to delete your account. All your saved information will be lost permanently."
                  }
                  textAlign="center"
                  marginTop={10}
                  color={Colors.gray}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomButton
                  title="Cancel"
                  width={110}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
                <CustomButton
                  title="Delete"
                  color={Colors.red}
                  backgroundColor={Colors.primary}
                  width={110}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("BottomTab");
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: s(20),
    marginVertical: vs(10),
  },
  content: {
    justifyContent: "space-between",
  },
  infoVw: {
    height: 118,
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(15),
    justifyContent: "space-between",
    marginTop: vs(10),
    marginBottom: vs(5),
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    height: vs(45),
    width: s(150),
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ms(10),
  },
  newAddressVw: {
    marginTop: vs(20),
  },
  addressScroll: {
    flexDirection: "row",
    marginTop: vs(10),
  },
  address: {
    height: vs(100),
    width: s(250),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(10),
    marginRight: s(10),
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
  plus: {
    height: vs(10),
    width: s(10),
  },

  cards: {
    flexDirection: "row",
    marginTop: vs(10),
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: vs(60),
    width: s(275),
    backgroundColor: Colors.white,
    borderRadius: vs(10),
    marginRight: s(5),
    alignItems: "center",
    padding: ms(10),
    paddingRight: vs(15),
  },
  visa2: {
    height: vs(40),
    width: s(40),
  },
  dots: {
    height: vs(20),
    width: s(20),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modal: {
    // width: 300,
    //height: 400,
    width: s(250),
    height: vs(350),
    paddingHorizontal: s(20),
    paddingVertical: s(30),
    backgroundColor: Colors.white,
    borderRadius: s(10),
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  modalContent: {
    alignItems: "center",
  },
  gift: {
    //width: 96,
    width: s(96),
    //height: 96,
    height: vs(96),
    marginTop: vs(10),
    marginBottom: vs(30),
  },
});
