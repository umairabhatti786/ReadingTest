import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import CustomTextInput from "../CustomTextInput";
import { bankCards } from "../../utils/Data/data";
import icons from "../../assets/icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const BankCards = () => {
  const [bankCardSelected, setBankCardSelected] = useState<number | null>(null);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cards}
    >
      {bankCards.map((card, index) => (
        <View key={card.id} style={styles.card}>
          <CustomTextInput
            placeholder={card.cardNumber}
            icon={icons.visa2}
            iconHeight={35}
            iconWidth={35}
            width={250}
            iconStyle={{ marginRight: s(10) }}
          />
          <TouchableOpacity
            style={styles.circle}
            onPress={() => setBankCardSelected(index)}
          >
            {bankCardSelected === index && <View style={styles.select} />}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default BankCards;

const styles = StyleSheet.create({
  cards: {
    // paddingHorizontal: s(20),
    gap: s(10),
  },
  card: {
    flexDirection: "row",
    height: vs(50),
    width: s(240),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    alignItems: "center",
  },
  circle: {
    height: vs(16),
    width: s(16),
    borderRadius: ms(100),
    borderWidth: s(2),
    borderColor: Colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    height: vs(8),
    width: s(8),
    borderRadius: ms(100),
    backgroundColor: Colors.orange,
  },
});
