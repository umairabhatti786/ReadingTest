import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { BottomTabParams } from "../../../routes/BottomTab";
import { Colors } from "../../../utils/Colors";
import imgs from "../../../assets/imgs";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import CustomText from "../../../components/CustomText";
import BookCard from "../../../components/BookCard";

interface HomeScreenProps {
  navigation: BottomTabNavigationProp<BottomTabParams, "HomeScreen">;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const tabs: string[] = [
    "All",
    "Literature",
    "Journeys",
    "History",
    "Fantasy",
    "Horror",
    "Kids",
  ];
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <HeaderBtmTabs />
        {/* <Image source={imgs.homeImg} style={styles.img} /> */}
        <View style={{ overflow: "hidden" }}>
          <ImageBackground
            source={imgs.homeImg}
            style={styles.img}
            imageStyle={{ borderRadius: moderateScale(10) }}
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
                marginTop={5}
              />
            </View>
          </ImageBackground>
        </View>
        {/* .............search................ */}
        <View style={styles.search}>
          <CustomTextInput
            placeholder="Search"
            rightIcon={icons.Magnifer}
            width={scale(255)}
          />
          <TouchableOpacity style={styles.btn}>
            <Image source={icons.Tuning} style={styles.tuning} />
          </TouchableOpacity>
        </View>
        {/* ............tabs...................... */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            {tabs.map((item, index) => (
              <TouchableOpacity key={index} style={styles.tab}>
                <CustomText text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        {/* ..............Recommended................ */}
        <View style={styles.RecommendedVw}>
          <CustomText text={"Recommended"} fontWeight="bold" marginBottom={5} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: scale(15) }}
          >
            <BookCard
              bookCover={imgs.Lara}
              bookTitle="Lara: The England Chronicles"
              author="Brian Lara"
            />
            <BookCard
              bookCover={imgs.hobbit}
              bookTitle="Hobbit"
              author="J. R. R. Tolkien"
            />
          </ScrollView>
        </View>
        {/* ........................end...................... */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  img: {
    width: "100%",
    height: verticalScale(120),
    //height: 138,
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
  txtAtImg: {
    marginTop: verticalScale(20),
    marginLeft: scale(25),
  },
  arrowCircle: {
    width: scale(24),
    height: verticalScale(24),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.white,
    opacity: 0.2,
    position: "absolute",
    top: verticalScale(50),
    left: scale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  ArrowBack: {
    width: scale(12),
    height: verticalScale(12),
  },
  btn: {
    width: scale(45),
    height: verticalScale(45),
    backgroundColor: Colors.blue,
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  tuning: {
    width: scale(20),
    height: verticalScale(20),
  },
  search: {
    flexDirection: "row",
    marginTop: verticalScale(10),
    width: "100%",
    justifyContent: "space-between",
  },
  tab: {
    height: verticalScale(40),
    borderRadius: moderateScale(40),
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(16),
  },
  RecommendedVw: {
    marginTop: verticalScale(10),
  },
});
