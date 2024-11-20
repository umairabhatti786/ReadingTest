import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ms, scale, verticalScale, vs } from "react-native-size-matters";
import imgs from "../../../assets/imgs";
import CustomText from "../../../components/CustomText";
import { Colors } from "../../../utils/Colors";
import icons from "../../../assets/icons";
import BookReviews from "../../../components/Book Reviews";
import BookCard from "../../../components/BookCard";

// { bookCover, bookTitle, author }: props
const BookDetails = () => {
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
      InStock: true,
    },
  ];
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={imgs.hobbit} style={styles.imgBG}>
          <View style={styles.overlay} />
          <Image source={imgs.hobbit} style={styles.img} />
        </ImageBackground>

        <View style={styles.content}>
          {/* .................bookTitle, author........... */}
          <CustomText text={"Hobbit"} fontWeight="bold" size={20} />
          <CustomText text={"J. R. R. Tolkien"} />
          {/* ..............price section.......... */}
          <View style={styles.AvailabilityVw}>
            <View style={styles.Avail}>
              <CustomText text={"Availability"} color={Colors.gray} />
              <CustomText
                text={"In Stock"}
                fontWeight="bold"
                size={18}
                color={Colors.green}
              />
            </View>
            <View style={styles.Avail}>
              <CustomText text={"List Price"} color={Colors.gray} />
              <CustomText
                text={"£12.99 = Rs.4746 "}
                color={Colors.black}
                textDecorationLine="line-through"
              />
            </View>
            <View style={styles.Avail}>
              <CustomText text={"App Price(10% OFF)"} color={Colors.gray} />
              <CustomText
                text={"Rs.2335"}
                fontWeight="bold"
                size={20}
                color={Colors.orange}
              />
            </View>
          </View>
          {/* ...............details............ */}
          <View style={styles.detailsVw}>
            <View style={styles.detail}>
              <CustomText text={"Publication year"} color={Colors.gray} />
              <CustomText text={"2015"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Category"} color={Colors.gray} />
              <CustomText text={"Fantacy"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Sub category"} color={Colors.gray} />
              <CustomText text={"Horror"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Material"} color={Colors.gray} />
              <CustomText text={"Paperback"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"ISBN"} color={Colors.gray} />
              <CustomText text={"%"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Pages"} color={Colors.gray} />
              <CustomText text={"10%"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Weight"} color={Colors.gray} />
              <CustomText text={"10%"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Publisher"} color={Colors.gray} />
              <CustomText text={"ABC Publisher"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Dimension"} color={Colors.gray} />
              <CustomText text={"10%"} />
            </View>
          </View>

          {/* .............About Book................. */}
          <View style={styles.AboutBook}>
            <CustomText text={"About Hobbit"} size={18} fontWeight="bold" />
            <CustomText
              text={
                "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Egestas dolor nunc id duis tortor tellus pellentesque quisque. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis."
              }
              textAlign="justify"
              color={Colors.gray2}
            />
          </View>
          {/* .............About Author................. */}
          <View style={styles.AboutBook}>
            <CustomText
              text={"About J. R. R. Tolkien"}
              size={18}
              fontWeight="bold"
            />
            <CustomText
              text={
                "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Egestas dolor nunc id duis tortor tellus pellentesque quisque. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis."
              }
              textAlign="justify"
              color={Colors.gray2}
            />
          </View>
          {/* .................Book Reviews...................... */}
          <BookReviews />
          <TouchableOpacity style={{ flexDirection: "row", marginTop: vs(10) }}>
            <CustomText
              text={"Write a Review"}
              fontWeight="bold"
              color={Colors.blue}
            />
            <Image source={icons.Pen} style={styles.icon} />
          </TouchableOpacity>

          <FlatList
            data={RecommendedData}
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
      </ScrollView>

      {/* ..............Btns................ */}
      <View style={[styles.btnsVw]}>
        <TouchableOpacity style={styles.btn}>
          <CustomText text={"Buy Now"} color={Colors.blue} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <CustomText text={"Add To Cart"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Image source={icons.Heart} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Image source={icons.Share} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/* ..................end................ */}
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: Colors.primary },
  imgBG: {
    height: verticalScale(320),
    // height: 376,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    ...StyleSheet.absoluteFillObject, // This makes the overlay fill the entire ImageBackground
  },
  img: {
    height: verticalScale(190),
    width: scale(120),
    // height: 220,
    // width: 143,
  },
  content: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  AvailabilityVw: {
    //flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: verticalScale(15),
    gap: scale(5),
  },
  Avail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsVw: {
    gap: ms(12),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: vs(10),
  },
  detail: {
    backgroundColor: Colors.white,
    height: vs(50),
    width: scale(95),
    borderRadius: ms(10),
    paddingLeft: scale(4),
    paddingTop: scale(5),
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(100),
    // padding: ms(15),
    height: vs(45),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
  },
  btn2: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(45),
    //padding: ms(15),
    height: vs(45),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
  },
  btnsVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: ms(1),
    borderColor: Colors.primary,
    opacity: 0.9,
    paddingVertical: vs(8),
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: scale(20),
  },
  icon: {
    height: vs(15),
    width: scale(15),
    marginLeft: scale(5),
  },

  AboutBook: {
    marginTop: vs(10),
  },
});
