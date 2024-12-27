import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import icons from "../../assets/icons";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../routes/RootNavigator";
import { BottomTabParams } from "../../routes/BottomTab";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { ms, s, vs } from "react-native-size-matters";
import CustomText from "../CustomText";
import { Colors } from "../../utils/Colors";
import imgs from "../../assets/imgs";
import CustomButton from "../CustomButton";

// // Define navigation prop types properly
// type HeaderBtmTabsNavigationProps = CompositeNavigationProp<
//   BottomTabNavigationProp<BottomTabParams, "HomeScreen", "CategoriesScreen">, // Bottom Tab Navigation Prop
//   StackNavigationProp<RootStackParamsList> // Stack Navigation Prop
// >;

// interface HeaderBtmTabsProps {
//   onRightIconPress?: () => void;
//   navigation: HeaderBtmTabsNavigationProps; // Make sure navigation is typed correctly
// }
type HeaderBtmTabsNavigationProps<T extends keyof BottomTabParams> =
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParams, T>, // Generic for the Bottom Tab screen
    StackNavigationProp<RootStackParamsList> // Root-level Stack Navigation
  >;

interface HeaderBtmTabsProps<T extends keyof BottomTabParams> {
  onRightIconPress?: () => void;
  navigation: HeaderBtmTabsNavigationProps<T>;
}

// .......................main function..................
// const HeaderBtmTabs = ({
//   onRightIconPress,
//   navigation,
// }: HeaderBtmTabsProps) => {

const HeaderBtmTabs = <T extends keyof BottomTabParams>({
  onRightIconPress,
  navigation,
}: HeaderBtmTabsProps<T>) => {
  //off-screen
  const [logoutmodal, setLogoutModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // Helper function to handle navigation and close the modal
  const navigateAndCloseModal = (screenName: keyof RootStackParamsList) => {
    setModalVisible(false); // Close the modal
    navigation.navigate(screenName); // Navigate to the screen
  };
  // const openModal = () => {
  //   setShowModal(true); // Make modal visible
  //   Animated.timing(slideAnim, {
  //     toValue: 0, // Slide into view
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const closeModal = () => {
  //   Animated.timing(slideAnim, {
  //     toValue: -width, // Slide out of view
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start(() => setShowModal(false)); // Hide modal after animation
  // };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={icons.bars} style={styles.icon} />
        </TouchableOpacity>
        <Image source={icons.logo} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={onRightIconPress}>
        <Image source={icons.bell} style={styles.icon} />
      </TouchableOpacity>
      {/* ..................Modal................ */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={modalVisible}
        // coverScreen={true}
        style={{ margin: 0 }}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => navigateAndCloseModal("LoginScreen")}
            >
              <CustomText text={"Sign Up / Login"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateAndCloseModal("Profile")}>
              <CustomText text={"Profile"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity>
              <CustomText text={"High Discounts"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAndCloseModal("CardDiscounts")}
            >
              <CustomText text={"Card Discounts"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAndCloseModal("SendGiftCardScreen")}
            >
              <CustomText text={"Send a gift"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAndCloseModal("RequestBookScreen")}
            >
              <CustomText text={"Request a book"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateAndCloseModal("About")}>
              <CustomText text={"About"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateAndCloseModal("Terms")}>
              <CustomText text={"Terms of Use"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAndCloseModal("PrivacyPolicy")}
            >
              <CustomText text={"Privacy Policy"} color={Colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAndCloseModal("HelpNSupport")}
            >
              <CustomText text={"Help & Support"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false), setLogoutModal(true);
              }}
            >
              <CustomText text={"Logout"} color={Colors.blue} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.closeIconCircle}
            onPress={() => setModalVisible(false)}
          >
            <Image source={icons.Close} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </Modal>
      {/* ............log out...Modal..................... */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={logoutmodal}
        style={{ alignSelf: "center" }}
      >
        <View style={styles.modal2}>
          <View style={styles.modalContent2}>
            <Image source={imgs.logout} style={styles.gift} />
            <CustomText text={"Logout?"} fontWeight="bold" size={20} />
            <CustomText
              text={
                "Are you sure you want to logout of this beautiful platform full of knowledge and stories and fascinating stuff?"
              }
              style={{ textAlign: "center", marginTop: vs(10) }}
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
              width={"45%"}
              onPress={() => {
                setLogoutModal(false);
              }}
            />
            <CustomButton
              title="Logout"
              color={Colors.red}
              backgroundColor={Colors.primary}
              width={"45%"}
              onPress={() => {
                setLogoutModal(false);
                navigation.navigate("BottomTab");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderBtmTabs;

const styles = StyleSheet.create({
  icon: {
    height: vs(24),
    width: s(24),
  },
  logo: {
    height: vs(20),
    width: s(98),
    marginLeft: s(20),
  },
  modal: {
    flex: 1,
    paddingBottom: s(20),
    backgroundColor: Colors.primary,
    // justifyContent: "space-between",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
    marginVertical: vs(80),
    gap: vs(30),
  },
  closeIcon: {
    width: s(18),
    height: vs(18),
    // width: 20,
    // height: 20,
  },
  closeIconCircle: {
    width: s(40),
    height: vs(40),
    // width: 48,
    // height: 48,
    backgroundColor: Colors.white,
    borderRadius: ms(50),
    alignItems: "center",
    justifyContent: "center",
  },

  modal2: {
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
  modalContent2: {
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
