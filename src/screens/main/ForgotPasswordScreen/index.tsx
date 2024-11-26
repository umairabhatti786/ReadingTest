import { Image, Modal, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import imgs from "../../../assets/imgs";
// .....for navigation and tTypes.............
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

// ..................types.....................

interface ForgotPasswordScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "ForgotPasswordScreen">;
}

//............................main func....................
const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View>
        <Header title="Forgot Password" />
        <CustomText
          text={"Enter your email address so we send you a reset password link"}
          marginTop={10}
        />
        <CustomTextInput placeholder="Email Address" marginVertical={10} />
      </View>
      <CustomButton
        title="Reset Password"
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

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: s(20),
    marginVertical: vs(10),
    marginTop: ms(10),
    marginBottom: ms(20),
    justifyContent: "space-between",
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
