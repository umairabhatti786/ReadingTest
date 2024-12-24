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
import ModalScreen from "../../../components/ModalScreen";
// ..................types.....................

interface ChangePasswordScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "ChangePasswordScreen">;
}

//............................main func....................
const ChangePasswordScreen = ({ navigation }: ChangePasswordScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.layout}>
        <View style={styles.content}>
          <Header title="Change Password" onPress={() => navigation.goBack()} />
          <CustomText
            text={"Enter your current password and create new password below."}
          />
          <CustomTextInput placeholder="Email address" rightIcon={icons.Eye} />
          <CustomTextInput
            placeholder="New Password"
            rightIcon={icons.Eye}
            inputContainerStyle={{ marginTop: vs(20) }}
          />
          <CustomTextInput placeholder="Confirm New Password" />
        </View>
        <CustomButton
          title="Change Password"
          onPress={() => setModalVisible(true)}
        />
      </View>
      {/* ...............Modal..................... */}

      <Modal
        animationType="slide" // Options: 'none', 'slide', 'fade'
        transparent={true} // Makes modal background transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Handles back button on Android
      >
        <ModalScreen
          img={imgs.ok}
          heading="Password Changed"
          status="Your password has been updated successfully"
          btnTitle="Great!"
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("Profile");
          }}
        />
      </Modal>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    // marginTop: ms(10),
    marginBottom: ms(20),
  },
  layout: {
    flex: 1,
    marginHorizontal: s(20),
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
