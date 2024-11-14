import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import { verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";

const RequestBookScreen = () => {
  return (
    <View>
      <Header title="Request a Book" />
      <CustomText
        text={"Enter the following details about the book you want to request."}
        marginVertical={verticalScale(10)}
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
      <CustomTextInput placeholder="Email" marginVertical={verticalScale(5)} />
      <CustomTextInput
        placeholder="+92 345 123 456 7"
        marginVertical={verticalScale(5)}
      />
      <CustomTextInput
        placeholder="Additional Info"
        marginVertical={verticalScale(5)}
        height={verticalScale(173)}
      />
      <CustomButton title="Send Request" />
    </View>
  );
};

export default RequestBookScreen;

const styles = StyleSheet.create({});
