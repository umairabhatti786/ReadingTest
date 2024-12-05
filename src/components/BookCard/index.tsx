import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import CustomText from "../CustomText";
import icons from "../../assets/icons";
import Fonts from "../../utils/Fonts";

type props = {
  bookCover: any;
  bookTitle: string;
  author: string;
  ListPrice: string;
  AppPrice: string;
  InStock: boolean;
};

const BookCard = ({
  bookCover,
  bookTitle,
  author,
  ListPrice,
  AppPrice,
  InStock,
}: props) => {
  return (
    <View style={styles.bookCard}>
      <ImageBackground source={bookCover} style={styles.imgBG}>
        <View style={styles.overlay} />
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
            text={ListPrice}
            size={12}
            fontWeight={400}
            color={Colors.gray}
          />
        </View>
        <View style={styles.appPriceVw}>
          <CustomText text={"App Price"} size={12} color={Colors.gray} />
          <CustomText
            text={AppPrice}
            size={14}
            fontWeight="700"
            fontFam={Fonts.bold}
            color={Colors.orange}
          />
        </View>
        <CustomText
          text={InStock === true ? "In Stock" : "Out Of Stock"}
          size={12}
          color={Colors.green}
        />
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
    width: s(190),
    height: vs(280),
    backgroundColor: Colors.white,
    borderRadius: ms(15),
    overflow: "hidden",
  },
  imgBG: {
    height: vs(132),
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    ...StyleSheet.absoluteFillObject, // This makes the overlay fill the entire ImageBackground
  },
  img: {
    height: vs(100),
    width: s(65),
  },
  bookDetails: {
    marginHorizontal: s(15),
    marginVertical: vs(10),
  },
  priceVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vs(5),
  },
  appPriceVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vs(2),
  },
  btnsVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: vs(10),
  },
  btn: {
    height: vs(32),
    width: s(50),
    backgroundColor: Colors.primary,
    borderRadius: ms(8),
    justifyContent: "center",
    alignItems: "center",
  },
  btnIcon: {
    height: vs(20),
    width: s(20),
  },
});
