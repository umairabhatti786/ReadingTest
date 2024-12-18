import { FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import icons from "../../assets/icons";
import { BookReviewsData } from "../../utils/Data/data";

const BookReviews = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={BookReviewsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: s(20),
          gap: s(15),
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.main}>
            <View>
              <CustomText text={item.title} size={12} fontWeight="bold" />
            </View>
            <CustomText
              text={item.review}
              size={12}
              color={Colors.gray}
              numberOfLines={6}
              style={{
                textAlign: "justify",
                letterSpacing: 1.5,
                lineHeight: 17,
              }}
            />
            <View style={styles.likes}>
              <Image source={icons.Like} style={styles.likeIcon} />
              <CustomText
                text={item.likes.toString()}
                style={{ marginLeft: s(5) }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BookReviews;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(15),
    width: s(225),
    gap: vs(10),
  },
  likeIcon: {
    height: vs(24),
    width: s(24),
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
});
