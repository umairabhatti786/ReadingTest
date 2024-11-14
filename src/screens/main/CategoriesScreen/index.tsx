import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Category from "../../../components/Category";
import CustomTextInput from "../../../components/CustomTextInput";

const CategoriesScreen = () => {
  const [searched, setSearched] = useState("");
  return (
    <View style={styles.screenContainer}>
      <HeaderBtmTabs />
      <CustomTextInput
        placeholder="Search Category"
        onChangeText={(text) => setSearched}
      />
      <Category title={"Art & Crafts"} />
      <Category title={"Stationery"} />
      <Category title={"Architecture"} />
      <Category title={"Art"} />
      <Category title={"Bio & Autobiography"} />
      <Category title={"Body, Mind & Spirit"} />
      <Category title={"Business"} />
      <Category title={"Children"} />
      <Category title={"Computer"} />
      <Category title={"Cooking"} />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
  },
});
