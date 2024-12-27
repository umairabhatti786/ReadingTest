import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { vs, s, ms } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import CustomTextInput from "../../../components/CustomTextInput";
import { Categories } from "../../../utils/Data/data";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
import CustomText from "../../../components/CustomText";
import icons from "../../../assets/icons";

type CategoriesScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "CategoriesScreen">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;
interface CategoriesScreenProps {
  navigation: CategoriesScreenProp;
}
//..main fun..........
const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  //....states.................
  const [searched, setSearched] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState(Categories);

  const handleFilter = (text: string) => {
    setSearched(text);
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
      <View style={styles.content}>
        <HeaderBtmTabs navigation={navigation} />
        <CustomTextInput
          placeholder="Search Category"
          value={searched}
          onChangeText={handleFilter}
          onRightIconPress={() => navigation.navigate("SubCategories")}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredCategories.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.Category}
              onPress={() => navigation.navigate("SubCategories")}
            >
              <CustomText text={item.label} />
              <Image source={icons.arrowRight} style={styles.arrowRight} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    marginHorizontal: s(20),
    marginVertical: vs(20),
    gap: vs(10),
  },
  Category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: vs(48),
    borderRadius: ms(10),
    backgroundColor: Colors.white,
    paddingHorizontal: s(10),
    marginVertical: vs(5),
  },
  arrowRight: {
    height: s(24),
    width: vs(24),
  },
});
