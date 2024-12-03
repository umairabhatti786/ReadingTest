import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import imgs from "../../assets/imgs";
import CustomText from "../CustomText";
import icons from "../../assets/icons";

type Props = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};
const Cart = ({ modalVisible, setModalVisible }: Props) => {
  return (
    <Modal
      animationType="slide" // Options: 'none', 'slide', 'fade'
      transparent={true} // Makes modal background transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)} // Handles back button on Android
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <Image source={imgs.Lara} style={styles.cartBook} />
          <View style={{ justifyContent: "space-between" }}>
            {/* <CustomText
              text={"Harry Potter And The Cursed Crown"}
              fontWeight="bold"
            /> */}
            <CustomText
              text={"Harry Potter And The Cursed Crown"}
              fontWeight="bold"
            />
            <CustomText text={"J.K. Rowling"} size={12} color={Colors.gray} />
            <View style={{ flexDirection: "row", gap: s(5) }}>
              <CustomText text={"Price"} color={Colors.gray} size={12} />
              <CustomText
                text={"Rs.2335"}
                color={Colors.orange}
                fontWeight="bold"
              />
            </View>
            <CustomText text={"Added to your cart..."} color={Colors.gray} />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image source={icons.CloseBlack} style={styles.close} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Cart;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modal: {
    //width: 390,
    width: s(325),
    height: vs(130),
    //height: 152,
    paddingHorizontal: s(20),
    paddingVertical: s(20),
    backgroundColor: Colors.white,
    borderRadius: s(10),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  modalContent: {
    alignItems: "center",
  },
  cartBook: {
    //width: 65,
    width: s(55),
    //height: 100,
    height: vs(85),
  },
  close: {
    width: s(20),
    height: vs(20),
  },
});
