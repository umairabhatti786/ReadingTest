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

type props = {
  bookCover: any;
  bookTitle: string;
  author: string;
  ListPrice: string;
  AppPrice: string;
  InStock: boolean;
  addToCart?: () => void;
  quantity?: number;
  onQuantityChange?: (itemQuantity: number) => void; // Callback for parent
};

const BookCardLiked = ({
  bookCover,
  bookTitle,
  author,
  ListPrice,
  AppPrice,
  InStock,
  addToCart,
  quantity = 0,
  onQuantityChange,
}: props) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  // const handleIncrease = () => {setItemQuantity((prev) => prev + 1; onQuantityChange?.(itemQuantity); // Notify parent});
  // const handleDecrease = () => {
  //   if (itemQuantity > 1) setItemQuantity((prev) => prev - 1);
  // };

  // const handleIncrease = () => {
  //   setItemQuantity((prev) => prev + 1);
  //   onQuantityChange?.(itemQuantity); // Notify parent
  // };........not updating on first press but on 2nd

  const handleIncrease = () => {
    // Increment the quantity first, then notify the parent
    setItemQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange?.(newQuantity); // Notify parent with the updated quantity
      return newQuantity;
    });
  };

  // const handleDecrease = () => {
  //   if (itemQuantity > 1) {
  //     setItemQuantity((prev) => prev - 1);
  //     onQuantityChange?.(itemQuantity); // Notify parent
  //   }
  // };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => {
        const newQuantity = prev - 1;
        onQuantityChange?.(newQuantity); // Notify parent with the updated quantity
        return newQuantity;
      });
    }
  };
  return (
    <View style={styles.bookCard}>
      <ImageBackground source={bookCover} style={styles.imgBG}>
        <View style={styles.overlay} />
        <Image source={bookCover} style={styles.img} />
      </ImageBackground>

      <View style={styles.bookDetails}>
        <View>
          <CustomText text={bookTitle} fontWeight="bold" />
          <CustomText text={author} size={12} color={Colors.gray} />
        </View>

        <View style={styles.priceVw}>
          <CustomText text={"List Price"} size={12} color={Colors.gray} />
          <CustomText
            text={ListPrice}
            size={12}
            color={Colors.gray}
            style={{ textDecorationLine: "line-through" }}
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

        {quantity > 0 ? (
          <View style={styles.quantityBtnVw}>
            {/* ........................quantity Btns............................ */}
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={handleDecrease}
            >
              <Image source={icons.Minus} style={{ height: 10, width: 10 }} />
            </TouchableOpacity>
            <CustomText text={itemQuantity.toString()} size={12} />
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={handleIncrease}
            >
              <Image
                source={icons.PlusWhite}
                style={{ height: 10, width: 10 }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btnsVw}>
            {/* ................like,share,addToCart btns............... */}
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
        )}
      </View>
    </View>
  );
};

export default BookCardLiked;

const styles = StyleSheet.create({
  bookCard: {
    //width: scale(190),
    // flex: 1,
    //height: 164,
    height: vs(142),
    backgroundColor: Colors.white,
    borderRadius: ms(15),
    overflow: "hidden",
    // marginVertical: vs(5),
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
    gap: vs(4),
    //justifyContent: "space-between",
  },
  priceVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vs(5),
  },
  appPriceVw: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnsVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: vs(10),
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
  quantityBtnVw: {
    flexDirection: "row",
    width: s(90),
    height: vs(32),
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: vs(10),
  },
  quantityBtn: {
    height: vs(20),
    width: s(20),
    backgroundColor: Colors.blue,
    borderRadius: ms(5),
    alignItems: "center",
    justifyContent: "center",
  },
});
