import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import { SubCategories } from "../../../utils/Data/data";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
// ..................types.....................
interface AllSubCategoriesProps {
  navigation: StackNavigationProp<RootStackParamsList, "AllSubCategories">;
}
//............................main func....................
const AllSubCategories = ({ navigation }: AllSubCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <View>
          <Header
            title="All Sub Categories"
            onPress={() => navigation.goBack()}
          />
          <FlatList
            data={SubCategories}
            contentContainerStyle={styles.flatContent}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  selectedCategory === item.label
                    ? styles.selected
                    : styles.nonSelected,
                  styles.cateVw,
                ]}
                onPress={() => setSelectedCategory(item.label)} // Update selected category on press
              >
                <CustomText
                  text={item.label}
                  color={
                    selectedCategory === item.label
                      ? Colors.primary
                      : Colors.gray
                  } // Change text color
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <CustomButton title="Apply" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default AllSubCategories;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: s(20),
    marginVertical: vs(20),
    gap: vs(10),
    justifyContent: "space-between",
  },
  flatContent: {
    gap: s(10),
    marginTop: vs(20),
  },
  cateVw: {
    borderRadius: ms(40),
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: vs(10),
    paddingHorizontal: s(15),
    marginRight: s(10),
  },
  selected: {
    backgroundColor: Colors.black,
  },
  nonSelected: {
    backgroundColor: Colors.white,
  },
});
