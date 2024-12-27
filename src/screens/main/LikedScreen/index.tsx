import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { ms, s } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import { LikedData } from "../../../utils/Data/data";
import BookCardLiked from "../../../components/BookCardLiked";
import Cart from "../../../components/Cart";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
type LikedScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "LikedScreen">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;
interface LikedScreenProps {
  navigation: LikedScreenProp;
}
const LikedScreen = ({ navigation }: LikedScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <HeaderBtmTabs navigation={navigation} />
      <View>
        <FlatList
          data={LikedData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BookCardLiked
              bookCover={item.bookCover}
              author={item.author}
              bookTitle={item.bookTitle}
              ListPrice={item.ListPrice}
              AppPrice={item.AppPrice}
              InStock
              addToCart={() => setModalVisible(true)}
            />
          )}
        />
      </View>
      <Cart modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: s(20),
    marginTop: ms(10),
    marginBottom: ms(20),
  },
});
