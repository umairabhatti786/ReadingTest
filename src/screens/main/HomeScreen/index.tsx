import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { vs, ms, s } from "react-native-size-matters";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
import { Colors } from "../../../utils/Colors";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import CustomText from "../../../components/CustomText";
import BookCard from "../../../components/BookCard";
import { HomeImgs, RecommendedData, tabs } from "../../../utils/Data/data";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "HomeScreen">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
//..main fun..........
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { width } = Dimensions.get("window");

  //..main return
  return (
    <View style={styles.screenContainer}>
      <View style={{ marginTop: vs(20), marginHorizontal: s(20) }}>
        <HeaderBtmTabs navigation={navigation} />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* .............FlatList for img............ */}
          <FlatList
            data={HomeImgs}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item }) => (
              <View style={styles.FlatListVw}>
                <ImageBackground
                  source={item.img}
                  style={[styles.img, { width: width * 0.88 }]}
                  imageStyle={{ borderRadius: ms(10) }}
                >
                  <TouchableOpacity style={styles.arrowCircle}>
                    <Image source={icons.ArrowBack} style={styles.ArrowBack} />
                  </TouchableOpacity>
                  <View style={styles.txtAtImg}>
                    <CustomText
                      text={"Grand Sale"}
                      color={Colors.white}
                      fontWeight="bold"
                      size={18}
                    />
                    <CustomText
                      text={`40% OFF\non entire literature \ncollection`}
                      color={Colors.white}
                      style={{ marginTop: vs(5) }}
                    />
                  </View>
                </ImageBackground>
              </View>
            )}
          />
          {/* .............search................ */}
          <View style={styles.search}>
            <CustomTextInput
              placeholder="Search"
              rightIcon={icons.Magnifer}
              width={s(255)}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Filters")}
            >
              <Image source={icons.Tuning} style={styles.tuning} />
            </TouchableOpacity>
          </View>
        </View>
        {/* ............tabs...................... */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            paddingHorizontal: s(20),
            paddingVertical: vs(13),
            gap: s(5),
          }}
        >
          {tabs.map((item, index) => (
            <TouchableOpacity key={index} style={styles.tab}>
              <CustomText text={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* ..............Recommended................ */}
        <CustomText
          text={"Recommended"}
          fontWeight="bold"
          style={{ marginLeft: s(20) }}
        />
        <CustomText
          text={"Most Popular"}
          fontWeight="bold"
          style={{ marginLeft: s(20), marginTop: vs(5) }}
        />

        {/* //..flat list for RecommendedData */}
        <FlatList
          data={RecommendedData}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: s(20),
            marginVertical: vs(5),
            gap: s(15),
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("BookDetails")}
            >
              <BookCard
                bookCover={item.bookCover}
                author={item.author}
                bookTitle={item.bookTitle}
                ListPrice={item.ListPrice}
                AppPrice={item.AppPrice}
                InStock
              />
            </TouchableOpacity>
          )}
        />
        {/* ........................end...................... */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    //flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    marginHorizontal: s(20),
    // marginHorizontal: 24,
    marginTop: vs(10),
    gap: vs(13),
    //gap: 15,
    // flex: 1,
  },
  FlatListVw: {
    //overflow: "hidden",
    flex: 1,
    marginRight: s(2.5),
    // height: verticalScale(120),
    // width: "100%",
  },
  img: {
    // width: "100%",
    height: vs(120),
    alignSelf: "center",
    // marginTop: verticalScale(10),
  },
  txtAtImg: {
    marginTop: vs(20),
    marginLeft: s(25),
  },
  arrowCircle: {
    width: s(24),
    height: vs(24),
    borderRadius: ms(50),
    backgroundColor: Colors.white,
    opacity: 0.2,
    position: "absolute",
    top: vs(50),
    left: s(10),
    alignItems: "center",
    justifyContent: "center",
  },
  ArrowBack: {
    width: s(12),
    height: vs(12),
  },
  btn: {
    width: s(45),
    height: vs(45),
    backgroundColor: Colors.blue,
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
  },
  tuning: {
    width: s(20),
    height: vs(20),
  },
  search: {
    flexDirection: "row",
    // marginTop: verticalScale(10),
    width: "100%",
    justifyContent: "space-between",
  },
  tab: {
    height: vs(40),
    borderRadius: ms(40),
    //borderRadius: 40,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    // marginRight: scale(5),
    // paddingVertical: verticalScale(10),
    //gap: s(5),
    paddingHorizontal: s(16),
  },
});
