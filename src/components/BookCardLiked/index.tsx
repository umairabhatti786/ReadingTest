import React, { useState } from "react";
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
import Cart from "../Cart";

type props = {
  bookCover: any;
  bookTitle: string;
  author: string;
  ListPrice: string;
  AppPrice: string;
  InStock: boolean;
  addToCart?: () => void;
};

const BookCardLiked = ({
  bookCover,
  bookTitle,
  author,
  ListPrice,
  AppPrice,
  InStock,
  addToCart,
}: props) => {
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
            text={ListPrice}
            size={12}
            fontWeight={400}
            color={Colors.gray}
            textDecorationLine="line-through"
          />
        </View>
        <View style={styles.appPriceVw}>
          <CustomText text={"App Price"} size={12} color={Colors.gray} />
          <CustomText
            text={AppPrice}
            size={12}
            fontWeight="bold"
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
            <Image source={icons.HeartRed} style={styles.btnIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={icons.Share} style={styles.btnIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={addToCart}>
            <Image source={icons.CartPlus} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookCardLiked;

const styles = StyleSheet.create({
  bookCard: {
    //width: scale(190),
    flex: 1,
    height: vs(164),
    backgroundColor: Colors.white,
    borderRadius: ms(15),
    overflow: "hidden",
    marginVertical: vs(5),
    flexDirection: "row",
  },
  imgBG: {
    width: s(120),
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
    marginTop: vs(10),
    flex: 1,
    justifyContent: "space-between",
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
    width: s(40),
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
