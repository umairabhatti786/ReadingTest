import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";

const Checkout = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Header title="Checkout" />
        <CustomText text="Add your optional payment method to save for future purchases." />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: s(20),
    marginTop: vs(20),
    marginBottom: ms(20),
    gap: vs(15),
  },
});
