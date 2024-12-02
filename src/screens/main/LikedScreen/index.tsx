import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import HeaderBtmTabs from "../../../components/HeaderBtmTabs";
import { ms, s } from "react-native-size-matters";
import { Colors } from "../../../utils/Colors";
import { LikedData } from "../../../utils/Data/data";
import BookCardLiked from "../../../components/BookCardLiked";
const LikedScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <HeaderBtmTabs />
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
            />
          )}
        />
      </View>
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
