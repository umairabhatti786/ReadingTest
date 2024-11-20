import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { ms, scale, verticalScale, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import icons from "../../assets/icons";

const BookReviews = () => {
  type BookReviewsProps = {
    id: string;
    title: string;
    likes: number;
    review: string;
  };
  const BookReviewsData: BookReviewsProps[] = [
    {
      id: "1",
      title: "John Doe",
      likes: 123,
      review:
        "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. ",
    },
    {
      id: "2",
      title: "John Doe",
      likes: 123,
      review:
        "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. ",
    },
    {
      id: "3",
      title: "John Doe",
      likes: 123,
      review:
        "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. ",
    },
  ];
  return (
    <View style={{ marginTop: verticalScale(10) }}>
      <CustomText
        text={"Book Reviews"}
        fontWeight="bold"
        size={18}
        marginBottom={vs(5)}
      />
      <FlatList
        data={BookReviewsData}
        horizontal
        showsHorizontalScrollIndicator={false}
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
              textAlign="justify"
            />
            <View style={styles.likes}>
              <Image source={icons.Like} style={styles.likeIcon} />
              <CustomText text={item.likes} marginLeft={5} />
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
    marginRight: scale(15),
    width: scale(225),
    gap: ms(10),
  },
  likeIcon: {
    height: vs(24),
    width: scale(24),
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
});
