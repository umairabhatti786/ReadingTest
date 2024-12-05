import {
  Animated,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import icons from "../../assets/icons";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../routes/RootNavigator";
import { BottomTabParams } from "../../routes/BottomTab";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { ms, s, vs } from "react-native-size-matters";
import CustomText from "../CustomText";
import { Colors } from "../../utils/Colors";

// Define navigation prop types properly
type HeaderBtmTabsNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "HomeScreen">, // Bottom Tab Navigation Prop
  StackNavigationProp<RootStackParamsList> // Stack Navigation Prop
>;

interface HeaderBtmTabsProps {
  onRightIconPress?: () => void;
  marginHorizontal?: number;
  marginTop?: number;
  navigation: HeaderBtmTabsNavigationProps; // Make sure navigation is typed correctly
}

// .......................main function..................
const HeaderBtmTabs = ({
  onRightIconPress,
  marginTop,
  marginHorizontal,
  navigation,
}: HeaderBtmTabsProps) => {
  const { height, width } = Dimensions.get("window");
  const [showModal, setShowModal] = useState<boolean>(false); //..for modal
  const [slideAnim] = useState(new Animated.Value(-width)); // Initial value

  //off-screen

  const [modalVisible, setModalVisible] = useState(false);

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
        marginHorizontal: s(marginHorizontal || 0),
        marginTop: vs(marginTop || 0),
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
        animationType="slide" // Options: 'none', 'slide', 'fade'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <CustomText text={"Sign Up / Login"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <CustomText text={"Profile"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"High Discounts"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"Card Discounts"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SendGiftCardScreen")}
            >
              <CustomText text={"Send a gift"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("RequestBookScreen")}
            >
              <CustomText text={"Request a book"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <CustomText text={"About"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
              <CustomText text={"Terms of Use"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicy")}
            >
              <CustomText text={"Privacy Policy"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("HelpNSupport")}
            >
              <CustomText text={"Help & Support"} color={Colors.blue} />
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
    paddingVertical: s(20),
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
    marginVertical: vs(50),
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
});
