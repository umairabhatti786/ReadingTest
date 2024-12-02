import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import {
  scale,
  verticalScale,
  moderateScale,
  vs,
} from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import Category from "../../../components/Category";
import CustomTextInput from "../../../components/CustomTextInput";
import { Categories } from "../../../utils/Data/data";

const CategoriesScreen = () => {
  //....states.................
  const [searchedCategory, setSearchedCategory] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState(Categories);

  const handleFilter = (text: string) => {
    setSearchedCategory(text);
    if (text) {
      const filteredData = Categories.filter((item) =>
        item.label.toLowerCase().trim().includes(text.toLowerCase())
      );
      setFilteredCategories(filteredData);
    } else {
      setFilteredCategories(Categories);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <HeaderBtmTabs />
      <CustomTextInput
        placeholder="Search Category"
        value={searchedCategory}
        onChangeText={handleFilter}
      />
      <ScrollView>
        {filteredCategories.map((item) => (
          <Category key={item.value} title={item.label} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: scale(20),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    gap: vs(10),
  },
});
