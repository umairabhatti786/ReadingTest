import { Image, Modal, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  moderateScale,
  s,
  scale,
  verticalScale,
  vs,
} from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import imgs from "../../../assets/imgs";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
// ..................types.....................

interface EditPersonalInfoProps {
  navigation: StackNavigationProp<RootStackParamsList, "EditPersonalInfo">;
}

const EditPersonalInfo = ({ navigation }: EditPersonalInfoProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <CustomText
          text={
            "You can edit your name and phone number below. You will need to enter your password to cnfirm."
          }
          marginBottom={-15}
          textAlign="left"
        />
        <CustomTextInput placeholder="Name" />
        <CustomTextInput
          placeholder="+92 345 123 456 7"
          icon={icons.ArrowDown}
        />
        <CustomTextInput placeholder="Password" />
      </View>
      <CustomButton title="Save Info" onPress={() => setModalVisible(true)} />
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
              <Image source={imgs.ok} style={styles.ok} />
              <CustomText
                text={"Email Sent"}
                fontWeight="bold"
                marginTop={20}
              />
              <CustomText
                text={
                  "A reset password link has been sent to your email. Please follow the link to reset your password."
                }
                marginTop={15}
                textAlign="center"
              />
            </View>
            <CustomButton
              title="Great!"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("LoginScreen");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditPersonalInfo;

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
  content: {
    gap: vs(20),
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
  ok: {
    height: vs(80),
    width: s(80),
    marginTop: vs(10),
  },
});
