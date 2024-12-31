import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import { CartItemsData } from "../../../utils/Data/data";
import BookCardLiked from "../../../components/BookCardLiked";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
type CartProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "Cart">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;
interface CartProps {
  navigation: CartProp;
}
const Cart = ({ navigation }: CartProps) => {
  const firstItem = CartItemsData[0];
  const secondItem = CartItemsData[1];
  const handleQuantityChange = (id: string, itemQuantity: number) => {
    setBookQuantity(itemQuantity);
  };
  const [bookQuantity, setBookQuantity] = useState(0);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <HeaderBtmTabs navigation={navigation} />
        <View style={{ justifyContent: "space-between", flex: 1 }}>
          <View style={{ gap: vs(15) }}>
            <BookCardLiked
              bookCover={firstItem.bookCover}
              bookTitle={firstItem.bookTitle}
              author={firstItem.author}
              ListPrice={firstItem.ListPrice}
              AppPrice={`${firstItem.AppPrice.currency}${firstItem.AppPrice.value}`}
              InStock
              quantity={firstItem.quantity}
              onQuantityChange={(itemQuantity) =>
                handleQuantityChange(firstItem.id, itemQuantity)
              }
            />
            <BookCardLiked
              bookCover={secondItem.bookCover}
              bookTitle={secondItem.bookTitle}
              author={secondItem.author}
              ListPrice={secondItem.ListPrice}
              AppPrice={`${secondItem.AppPrice.currency}${secondItem.AppPrice.value}`}
              InStock
              quantity={secondItem.quantity}
              onQuantityChange={(itemQuantity) =>
                handleQuantityChange(secondItem.id, itemQuantity)
              }
            />
          </View>

          <View>
            <View style={styles.totalVw}>
              <CustomText text="Subtotal" color={Colors.gray} />
              {/* <CustomText text="Rs. 4,670" fontWeight={"bold"} /> */}
              <CustomText
                fontWeight={"bold"}
                text={`Rs. ${
                  firstItem.AppPrice.value * bookQuantity +
                  secondItem.AppPrice.value * bookQuantity
                }`}
              />
            </View>
            <CustomButton
              title="Checkout"
              onPress={() => navigation.navigate("Checkout")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: s(20),
    marginTop: vs(20),
    marginBottom: vs(10),
    gap: vs(15),
  },
  totalVw: {
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: s(10),
    height: vs(44),
    marginBottom: vs(15),
  },
});
