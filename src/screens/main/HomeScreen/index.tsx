import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  View,
} from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  vs,
  ms,
} from "react-native-size-matters";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
import { Colors } from "../../../utils/Colors";
import imgs from "../../../assets/imgs";
import CustomTextInput from "../../../components/CustomTextInput";
import icons from "../../../assets/icons";
import CustomText from "../../../components/CustomText";
import BookCard from "../../../components/BookCard";

// interface HomeScreenProps {
//   navigation: BottomTabNavigationProp<BottomTabParams, "HomeScreen">;
// }
// type HomeScreenProps = {
//   navigation: StackNavigationProp<RootStackParamsList, "BottomTabs">;
// };
type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "HomeScreen">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
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
  const FlatListData: FlatListProps[] = [
    { id: "1", img: imgs.homeImg },
    { id: "2", img: imgs.homeImg1 },
    { id: "3", img: imgs.homeImg2 },
  ];
  type FlatListProps = {
    id: string;
    img: any;
  };
  const { height, width } = Dimensions.get("window");
  // .............Recommended Data..............................
  type RecommendedDataProps = {
    id: string;
    bookCover: any;
    bookTitle: string;
    author: string;
    ListPrice: string;
    AppPrice: string;
    InStock: boolean;
  };
  const RecommendedData: RecommendedDataProps[] = [
    {
      id: "1",
      bookCover: imgs.Lara,
      bookTitle: "Lara: The England Chronicles",
      author: "Brian Lara",
      ListPrice: "£12.99 = Rs.4746",
      AppPrice: "Rs.2335",
      InStock: true,
    },
    {
      id: "2",
      bookCover: imgs.hobbit,
      bookTitle: "Hobbit",
      author: "J. R. R. Tolkien",
      ListPrice: "£12.99 = Rs.4746",
      AppPrice: "Rs.2335",
      InStock: true,
    },
    {
      id: "3",
      bookCover: imgs.Lara,
      bookTitle: "Lara: The England Chronicles",
      author: "Brian Lara",
      ListPrice: "£12.99 = Rs.4746",
      AppPrice: "Rs.2335",
      InStock: false,
    },
  ];
  const [showModal, setShowModal] = useState<boolean>(false); //..for modal
  const [slideAnim] = useState(new Animated.Value(-width)); // Initial value off-screen
  const openModal = () => {
    setShowModal(true); // Make modal visible
    Animated.timing(slideAnim, {
      toValue: 0, // Slide into view
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: -width, // Slide out of view
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowModal(false)); // Hide modal after animation
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <HeaderBtmTabs onLeftIconPress={openModal} />

        {/* .............FlatList............ */}
        <FlatList
          data={FlatListData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <View style={styles.FlatListVw}>
              <ImageBackground
                source={item.img}
                style={[styles.img, { width: width * 0.88 }]}
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
          )}
        />

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
          <CustomText
            text={"Most Popular "}
            fontWeight="bold"
            marginBottom={5}
          />
          <FlatList
            data={RecommendedData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BookCard
                bookCover={item.bookCover}
                author={item.author}
                bookTitle={item.bookTitle}
                ListPrice={item.ListPrice}
                AppPrice={item.AppPrice}
                InStock
              />
            )}
          />
        </View>

        {/* ........................end...................... */}
      </View>
      {showModal ? (
        <Animated.View
          style={[styles.menuModal, { transform: [{ translateX: slideAnim }] }]}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <CustomText text={"Sign Up / Login"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"High Discounts"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"Card Discounts"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SendGiftCardScreen")}
            >
              <CustomText text={"Send a gift"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"Request a book"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"About"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"Terms of Use"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"Privacy Policy"} color={Colors.blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText text={"Help & Support"} color={Colors.blue} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeIconCircle} onPress={closeModal}>
            <Image source={icons.Close} style={styles.closeIcon} />
          </TouchableOpacity>
        </Animated.View>
      ) : null}
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
  FlatListVw: {
    //overflow: "hidden",
    flex: 1,
    marginRight: scale(2.5),
    // height: verticalScale(120),
    // width: "100%",
  },
  img: {
    // width: "100%",
    height: verticalScale(120),
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
  // menuModal: {
  //   flex: 1,
  //   backgroundColor: Colors.blue,
  // },
  menuModal: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: ms(100),
    paddingBottom: ms(50),

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10, // Ensure it appears above other elements
  },
  modalContent: {
    gap: vs(30),
  },

  closeIcon: {
    width: scale(18),
    height: verticalScale(18),
    // width: 20,
    // height: 20,
  },
  closeIconCircle: {
    width: scale(40),
    height: verticalScale(40),
    // width: 48,
    // height: 48,
    backgroundColor: Colors.white,
    borderRadius: ms(50),
    alignItems: "center",
    justifyContent: "center",
  },
});
