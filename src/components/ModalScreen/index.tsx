import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";

type modalProps = {
  onPress: () => void;
  heading: string;
  img: ImageSourcePropType;
  status: string;
  btnTitle: string;
};
const ModalScreen = ({
  onPress,
  heading,
  img,
  status,
  btnTitle,
}: modalProps) => {
  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Image source={img} style={styles.img} />
          <CustomText
            text={heading}
            size={20}
            fontWeight={"bold"}
            style={{ marginTop: vs(20) }}
          />
          <CustomText
            text={status}
            color={Colors.gray}
            style={{
              textAlign: "center",
            }}
          />
        </View>
        <CustomButton
          title={btnTitle}
          buttonStyle={{ marginTop: vs(45) }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  modal: {
    backgroundColor: Colors.white,
    height: vs(350),
    width: s(260),
    paddingHorizontal: ms(20),
    paddingVertical: vs(20),
    borderRadius: ms(20),
    justifyContent: "space-between",
  },
  modalContent: {
    alignItems: "center",
    gap: vs(15),
  },
  img: {
    height: vs(85),
    width: s(85),
    resizeMode: "contain",
  },
});
