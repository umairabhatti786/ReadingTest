import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useRef } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import Header from "../../../components/Header";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";
import {
  banks,
  CardDiscountData,
  CardDiscountMethodData,
} from "../../../utils/Data/data";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import icons from "../../../assets/icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

//.....................types.....................
interface CardDiscountsProps {
  navigation: StackNavigationProp<RootStackParamsList, "CardDiscounts">;
}

//............................main func....................

const CardDiscounts = ({ navigation }: CardDiscountsProps) => {
  //...for discount details Bottom Sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["70%", "60%", "50%"], []);
  const openBottomSheet = () => {
    bottomSheetModalRef.current?.present(); // Open the BottomSheet
  };
  const handleDismiss = () => {
    bottomSheetModalRef.current?.dismiss(); // close bottom sheet
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.main}>
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
          {CardDiscountData.map((item) => (
            <View style={{ gap: vs(15) }}>
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomText text={item.BIN.toString()} size={10} />
                <CustomText text={item.Category} size={10} />
                <CustomText text={item.Type} size={10} />
                <CustomText text={item.Discount} size={10} />
                <CustomText text={item.Cap.toString()} size={10} />
              </View>
              <View style={styles.line} />
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginHorizontal: s(20) }}>
        <CustomButton title="How to get discount" onPress={openBottomSheet} />
      </View>
      {/* .........BottomSheet.  for How to get your discount................. */}
      <CustomBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        onDismiss={handleDismiss}
        backgroundColor={Colors.primary}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.sheetHeader}>
            <CustomText
              text={"How to get your discount"}
              fontWeight="bold"
              size={18}
            />
            <TouchableOpacity onPress={handleDismiss}>
              <Image source={icons.CloseBlack} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          {CardDiscountMethodData.map((item) => (
            <View
              style={{ flexDirection: "row", gap: s(10), marginBottom: vs(5) }}
            >
              <View style={styles.num}>
                <CustomText
                  text={item.no.toString()}
                  color={Colors.white}
                  size={20}
                  fontWeight={"bold"}
                />
              </View>
              <View style={{ flex: 1 }}>
                <CustomText text={item.method} />
              </View>
            </View>
          ))}
          {/* .....end of....BottomSheet for buy now................. */}
        </View>
      </CustomBottomSheet>
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
    gap: vs(15),
  },
  content: {
    marginHorizontal: s(20),
    gap: vs(20),
    marginTop: vs(20),
  },
  bankcards: {
    flexDirection: "row",
    gap: s(10),
    paddingHorizontal: s(20),
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
  line: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  bottomSheetContainer: {
    flex: 1,
    gap: vs(15),
    marginHorizontal: s(20),
    marginVertical: vs(10),
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeIcon: {
    width: s(18),
    height: vs(18),
  },
  num: {
    backgroundColor: Colors.orange,
    height: s(32),
    width: s(32),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ms(10),
  },
});
