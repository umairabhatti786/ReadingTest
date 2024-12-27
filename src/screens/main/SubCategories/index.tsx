import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import { LikedData } from "../../../utils/Data/data";
import BookCardLiked from "../../../components/BookCardLiked";
// ..................types.....................

interface SubCategoriesProps {
  navigation: StackNavigationProp<RootStackParamsList, "SubCategories">;
}

//............................main func....................

const SubCategories = ({ navigation }: SubCategoriesProps) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        {/* ............Header................. */}
        <View style={styles.rowDirectionVw}>
          <Header title="Business" onPress={() => navigation.goBack()} />
          {/* <TouchableOpacity  onPress={() => navigation.navigate("AllSubCategories")}> */}
          <CustomText
            text="All Sub-categories"
            color={Colors.blue}
            onPress={() => navigation.navigate("AllSubCategories")}
          />
          {/* </TouchableOpacity> */}
        </View>
        {/* .........search.............. */}
        <View style={styles.rowDirectionVw}>
          <CustomTextInput
            placeholder="Search"
            rightIcon={icons.Magnifer}
            width={s(255)}
            // width="80%"
          />
          <TouchableOpacity
            style={styles.tuningBtn}
            onPress={() => navigation.navigate("Filters")}
          >
            <Image source={icons.Tuning} style={styles.tuningIcon} />
          </TouchableOpacity>
        </View>
        {/* .......iten numbers and clear...... */}
        <View style={styles.rowDirectionVw}>
          <CustomText
            text="Showing 6336 items in Business - E Commerce"
            color={Colors.gray}
            size={10}
          />
          <CustomText text="Clear" color={Colors.blue} size={10} />
        </View>
        <FlatList
          data={LikedData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: s(15),
            paddingBottom: vs(100),
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BookCardLiked
              bookCover={item.bookCover}
              author={item.author}
              bookTitle={item.bookTitle}
              ListPrice={item.ListPrice}
              AppPrice={item.AppPrice}
              InStock
            />
          )}
        />
        {/* ........end......... */}
      </View>
    </View>
  );
};

export default SubCategories;

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
  rowDirectionVw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tuningBtn: {
    width: s(45),
    height: vs(45),
    backgroundColor: Colors.blue,
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
  },
  tuningIcon: {
    width: s(20),
    height: vs(20),
  },
});
