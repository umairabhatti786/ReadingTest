import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import { LikedData } from "../../../utils/Data/data";
import BookCardLiked from "../../../components/BookCardLiked";
import Cart from "../../../components/Cart";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabParams } from "../../../routes/BottomTab";
type LikedProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, "Liked">, // Tab-specific navigation
  StackNavigationProp<RootStackParamsList> // Root-level navigation
>;
interface LikedProps {
  navigation: LikedProp;
}
const Liked = ({ navigation }: LikedProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <HeaderBtmTabs navigation={navigation} />
        <View>
          <FlatList
            data={LikedData}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: vs(15), paddingBottom: vs(30) }}
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
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: s(20),
    marginTop: vs(20),
    marginBottom: ms(20),
    gap: vs(15),
  },
});
