import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import imgs from "../../../assets/imgs";
import CustomText from "../../../components/CustomText";
import { Colors } from "../../../utils/Colors";
import icons from "../../../assets/icons";
import BookReviews from "../../../components/Book Reviews";
import BookCard from "../../../components/BookCard";
import { RecommendedData, CartItemsData } from "../../../utils/Data/data";

const Gpt = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={icons.ArrowLeft} style={styles.backArrow} />

        {/* Cart Icon */}
        <TouchableOpacity>
          <View>
            <Image source={icons.Cart} style={styles.cartIcon} />

            {/* Cart Count View */}
            <View style={styles.cartItems}>
              <CustomText
                text={CartItemsData.length.toString()}
                color={Colors.white}
                size={10}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Gpt;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: s(10),
  },
  backArrow: {
    height: s(20),
    width: s(20),
  },
  cartIcon: {
    height: s(25),
    width: s(25),
  },
  cartItems: {
    height: s(15),
    width: s(15),
    backgroundColor: Colors.orange,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -5, // Positioning above the cart icon
    right: -5, // Positioning to the right of the cart icon
  },
});
