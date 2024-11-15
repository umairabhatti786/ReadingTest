import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import CustomText from "../CustomText";
import icons from "../../assets/icons";

type props = {
  bookCover: any;
  bookTitle: string;
  author: string;
};

const BookCard = ({ bookCover, bookTitle, author }: props) => {
  return (
    <View style={styles.bookCard}>
      <ImageBackground source={bookCover} style={styles.imgBG}>
        <View style={styles.overlay}></View>
        <Image source={bookCover} style={styles.img} />
      </ImageBackground>

      <View style={styles.bookDetails}>
        <CustomText text={bookTitle} fontWeight="bold" />
        <CustomText
          text={author}
          size={12}
          fontWeight={400}
          color={Colors.gray}
        />
        <View style={styles.priceVw}>
          <CustomText
            text={"List Price"}
            size={12}
            fontWeight={400}
            color={Colors.gray}
          />
          <CustomText
            text={"£12.99 = Rs.4746"}
            size={12}
            fontWeight={400}
            color={Colors.gray}
          />
        </View>
        <View style={styles.appPriceVw}>
          <CustomText text={"App Price"} size={12} color={Colors.gray} />
          <CustomText
            text={"Rs.2335"}
            size={12}
            fontWeight="bold"
            color={Colors.orange}
          />
        </View>
        <CustomText text={"In Stock"} size={12} color={Colors.green} />
        <View style={styles.btnsVw}>
          <TouchableOpacity style={styles.btn}>
            <Image source={icons.Heart} style={styles.btnIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={icons.Share} style={styles.btnIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={icons.CartPlus} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  bookCard: {
    width: scale(190),
    height: verticalScale(280),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    overflow: "hidden",
  },
  imgBG: {
    height: verticalScale(132),
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    ...StyleSheet.absoluteFillObject, // This makes the overlay fill the entire ImageBackground
  },
  img: {
    height: verticalScale(100),
    width: scale(65),
  },
  bookDetails: {
    marginHorizontal: scale(15),
    marginVertical: verticalScale(10),
  },
  priceVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(5),
  },
  appPriceVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(2),
  },
  btnsVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(10),
  },
  btn: {
    height: verticalScale(32),
    width: scale(50),
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  btnIcon: {
    height: verticalScale(20),
    width: scale(20),
  },
});
