import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../utils/Colors";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";

const RequestBookScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Header title="Request a Book" />
          <CustomText
            text={
              "Enter the following details about the book you want to request."
            }
          />
          <CustomTextInput
            placeholder="Book Title"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Author Name"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Your Name"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Email"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="+92 345 123 456 7"
            marginVertical={verticalScale(5)}
          />
          <CustomTextInput
            placeholder="Additional Info"
            marginVertical={verticalScale(5)}
            height={verticalScale(130)}
          />
        </View>
      </View>
      <CustomButton title="Send Request" />
    </View>
  );
};

export default RequestBookScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  content: {
    flex: 1,
    gap: verticalScale(15),
    justifyContent: "space-between",
  },
  inputs: {
    gap: verticalScale(10),
    justifyContent: "space-between",
  },
});
