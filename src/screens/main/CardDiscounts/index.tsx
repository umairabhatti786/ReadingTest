import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import Header from "../../../components/Header";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import CustomButton from "../../../components/CustomButton";
import Fonts from "../../../utils/Fonts";
import CustomText from "../../../components/CustomText";
import { banks } from "../../../utils/Data/data";

//.....................types.....................
interface CardDiscountsProps {
  navigation: StackNavigationProp<RootStackParamsList, "CardDiscounts">;
}

//............................main func....................

const CardDiscounts = ({ navigation }: CardDiscountsProps) => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <View style={styles.content}>
          <Header title="Card Discounts" onPress={() => navigation.goBack()} />
          <CustomText text="Refer to the list below for discount that apply to your bank." />
        </View>

        {/* .........map.................. */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bankcards}
        >
          {banks.map((item) => (
            <TouchableOpacity key={item.id} style={styles.bankcard}>
              <Image source={item.image} style={styles.bankImg} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.discountsVw}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="BIN" size={10} color={Colors.gray} />
            <CustomText text="Category" size={10} color={Colors.gray} />
            <CustomText text="Type" size={10} color={Colors.gray} />
            <CustomText text="Discount" size={10} color={Colors.gray} />
            <CustomText text="Cap" size={10} color={Colors.gray} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText text="470556" size={10} color={Colors.black} />
            <CustomText text="Credit" size={10} color={Colors.black} />
            <CustomText text="Platinum" size={10} color={Colors.black} />
            <CustomText text="30%" size={10} color={Colors.black} />
            <CustomText text="2000" size={10} color={Colors.black} />
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: s(20) }}>
        <CustomButton
          title="How to get discount"
          fontWeight={400}
          fontSize={14}
          fontFamily={Fonts.regular}
        />
      </View>
    </View>
  );
};

export default CardDiscounts;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
  },
  main: {
    // flex: 1,
    // marginHorizontal: s(20),
    // marginBottom: vs(20),
  },
  content: {
    marginHorizontal: s(20),
    gap: vs(20),
    marginBottom: vs(20),
  },
  bankcards: {
    flexDirection: "row",
    gap: s(10),
    paddingHorizontal: s(20),
    marginBottom: vs(20),
  },
  bankcard: {
    height: vs(64),
    width: s(72),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
  },
  bankImg: {
    height: vs(32),
    width: s(32),
  },
  discountsVw: {
    marginHorizontal: s(20),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(16),
    gap: vs(16),
  },
});
