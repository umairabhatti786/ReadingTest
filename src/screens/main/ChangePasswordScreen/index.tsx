import { Image, Modal, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ms, s, scale, vs } from "react-native-size-matters";
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

interface ChangePasswordScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "ChangePasswordScreen">;
}

//............................main func....................
const ChangePasswordScreen = ({ navigation }: ChangePasswordScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Header title="Change Password" onPress={() => navigation.goBack()} />
        <CustomText
          text={"Enter your current password and create new password below."}
        />
        <CustomTextInput placeholder="Email address" rightIcon={icons.Eye} />
        <CustomTextInput
          placeholder="New Password"
          rightIcon={icons.Eye}
          marginTop={20}
        />
        <CustomTextInput placeholder="Confirm New Password" />
      </View>
      <CustomButton
        title="Change Password"
        onPress={() => setModalVisible(true)}
      />
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
              <Image source={imgs.ok} style={styles.ok} resizeMode="contain" />
              <CustomText
                text={"Password Changed"}
                fontWeight="bold"
                size={20}
              />
              <CustomText
                text={"Your password has been updated successfully"}
                textAlign="center"
                marginTop={10}
                color={Colors.gray}
              />
            </View>
            <CustomButton
              title="Great!"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Profile");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginTop: ms(10),
    marginBottom: ms(20),
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
    //width: 96,
    width: s(96),
    //height: 96,
    height: vs(96),
    marginTop: vs(10),
    marginBottom: vs(30),
  },
});
