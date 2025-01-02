import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import Header from "../../../components/Header";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import {
  CategoriesData,
  BookLanguageData,
  BookFormatData,
  BookPriceData,
} from "../../../utils/Data/data";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import DropDown from "../../../components/DropDown";
// ..................types.....................

interface FiltersProps {
  navigation: StackNavigationProp<RootStackParamsList, "Filters">;
}

//............................main func....................
const Filters = ({ navigation }: FiltersProps) => {
  // .......states......................
  const [category, setCategory] = useState<{
    label: string;
    value: string | number;
  } | null>(null);
  const [language, setLanguage] = useState<{
    label: string;
    value: string | number;
  } | null>(null);
  const [format, setFormat] = useState<{
    label: string;
    value: string | number;
  } | null>(null);
  const [priceRange, setPriceRange] = useState<{
    label: string;
    value: string | number;
  } | null>(null);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.layout}>
        <View style={styles.content}>
          <Header title="Filters" onPress={() => navigation.goBack()} />
          <CustomTextInput placeholder="keyword" />
          <CustomTextInput placeholder="Title" />
          <CustomTextInput placeholder="Author" />
          <CustomTextInput placeholder="ISBN" />
          {/* ........................DropDown for catagories................ */}
          <DropDown
            value={category}
            data={CategoriesData}
            placeholder="Category"
            onChange={(selectedItem) => setCategory(selectedItem)}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomTextInput placeholder="Publisher" width={s(150)} />
            <CustomTextInput placeholder="Publication Year" width={s(150)} />
          </View>
          {/* ........................DropDown for language................ */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <DropDown
              value={language}
              data={BookLanguageData}
              placeholder="language"
              onChange={(selectedItem) => setLanguage(selectedItem)}
              width={s(150)}
            />
            {/* ........................DropDown for Formats................ */}

            <DropDown
              value={format}
              data={BookFormatData}
              placeholder="Formats"
              onChange={(selectedItem) => setFormat(selectedItem)}
              width={s(150)}
            />
          </View>
          {/* ........................DropDown for priceRange................ */}
          <DropDown
            value={priceRange}
            data={BookPriceData}
            placeholder="Price range"
            onChange={(selectedItem) => setPriceRange(selectedItem)}
          />
        </View>
        <CustomButton title="Apply" />
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  layout: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: s(20),
    marginTop: vs(20),
  },
  content: {
    gap: vs(15),
  },
});
