import React, { useCallback, useMemo, useState } from "react";
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
import { ms, s, scale, verticalScale, vs } from "react-native-size-matters";
import imgs from "../../../assets/imgs";
import CustomText from "../../../components/CustomText";
import { Colors } from "../../../utils/Colors";
import icons from "../../../assets/icons";
import BookReviews from "../../../components/Book Reviews";
import BookCard from "../../../components/BookCard";
import {
  LikedData,
  RecommendedData,
  CartItemsData,
} from "../../../utils/Data/data";
//....,,,,,,,,,,,,,,...BottomSheet........
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetBackdropProps,
  // TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BookCardLiked from "../../../components/BookCardLiked";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";

const BookDetails = () => {
  const firstItem = CartItemsData[0]; // Access the first object in the data array
  //....,,,,,,,,,,,,,,...BottomSheet........
  const [currentIndex, setCurrentIndex] = useState(0);
  const snapPoints = useMemo(() => ["50%", "60%", "70%"], []);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);
  const toggleBottomSheet = () => {
    setBottomSheetIndex((prevIndex) => (prevIndex === -1 ? 2 : -1));
    // Toggle between closed (-1) and open (2)
  };
  // const renderBackdrop = useCallback(
  //   (props) => (
  //    { <BottomSheetBackdrop
  //       {...props}
  //       disappearsOnIndex={-1}
  //       appearsOnIndex={2}
  //     />,setBookQuantity(1)}
  //   ),
  //   []
  // );
  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    // const renderBackdrop = useCallback((props) => {
    setBookQuantity(1);
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    );
  }, []);

  //........ for review write modal........
  const [writeReviewModal, setWriteReviewModal] = useState(false);

  // Manage cart items as state
  const [cartItems, setCartItems] = useState(CartItemsData);

  // Handle quantity change
  const handleQuantityChange = (id: string, itemQuantity: number) => {
    // setCartItems((prevItems) =>
    //   prevItems.map((item) =>
    //     item.id === id ? { ...item, quantity: itemQuantity } : item
    //   )
    // );
    setBookQuantity(itemQuantity);
  };
  const [bookQuantity, setBookQuantity] = useState(0);
  //...............for  stars rating..................
  const rating = [1, 2, 3, 4, 5];
  const [ratingIndex, setRatingIndex] = useState(0);
  //.......... on add to cart pressed...........
  const [showQuantity, setShowQuantity] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const handleIncrease = () => {
    // Increment the quantity first, then notify the parent
    setItemQuantity((prev) => {
      const newQuantity = prev + 1;
      // onQuantityChange?.(newQuantity); // Notify parent with the updated quantity
      return newQuantity;
    });
  };
  const handleDecrease = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => {
        const newQuantity = prev - 1;
        // onQuantityChange?.(newQuantity); // Notify parent with the updated quantity
        return newQuantity;
      });
    }
  };
  //...........main func return.......
  return (
    <GestureHandlerRootView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={imgs.hobbit} style={styles.imgBG}>
          <View style={styles.overlay} />
          <Image source={imgs.hobbit} style={styles.img} />
        </ImageBackground>

        <View style={styles.content}>
          {/* .................bookTitle, author........... */}
          <CustomText text={"Hobbit"} fontWeight="bold" size={20} />
          <CustomText text={"J. R. R. Tolkien"} />
          {/* ..............price section.......... */}
          <View style={styles.AvailabilityVw}>
            <View style={styles.Avail}>
              <CustomText text={"Availability"} color={Colors.gray} />
              <CustomText
                text={"In Stock"}
                fontWeight="bold"
                size={18}
                color={Colors.green}
              />
            </View>
            <View style={styles.Avail}>
              <CustomText text={"List Price"} color={Colors.gray} />
              <CustomText
                text={"£12.99 = Rs.4746 "}
                color={Colors.black}
                textDecorationLine="line-through"
              />
            </View>
            <View style={styles.Avail}>
              <CustomText text={"App Price(10% OFF)"} color={Colors.gray} />
              <CustomText
                text={"Rs.2335"}
                fontWeight="bold"
                size={20}
                color={Colors.orange}
              />
            </View>
          </View>
          {/* ...............details............ */}
          <View style={styles.detailsVw}>
            <View style={styles.detail}>
              <CustomText text={"Publication year"} color={Colors.gray} />
              <CustomText text={"2015"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Category"} color={Colors.gray} />
              <CustomText text={"Fantacy"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Sub category"} color={Colors.gray} />
              <CustomText text={"Horror"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Material"} color={Colors.gray} />
              <CustomText text={"Paperback"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"ISBN"} color={Colors.gray} />
              <CustomText text={"%"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Pages"} color={Colors.gray} />
              <CustomText text={"10%"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Weight"} color={Colors.gray} />
              <CustomText text={"10%"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Publisher"} color={Colors.gray} />
              <CustomText text={"ABC Publisher"} />
            </View>
            <View style={styles.detail}>
              <CustomText text={"Dimension"} color={Colors.gray} />
              <CustomText text={"10%"} />
            </View>
          </View>

          {/* .............About Book................. */}
          <View style={styles.AboutBook}>
            <CustomText text={"About Hobbit"} size={18} fontWeight="bold" />
            <CustomText
              text={
                "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Egestas dolor nunc id duis tortor tellus pellentesque quisque. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis."
              }
              textAlign="justify"
              color={Colors.gray2}
            />
          </View>
          {/* .............About Author................. */}
          <View style={styles.AboutBook}>
            <CustomText
              text={"About J. R. R. Tolkien"}
              size={18}
              fontWeight="bold"
            />
            <CustomText
              text={
                "Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Egestas dolor nunc id duis tortor tellus pellentesque quisque. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis."
              }
              textAlign="justify"
              color={Colors.gray2}
            />
          </View>
          {/* .................Book Reviews...................... */}
          <BookReviews />
          {/* ..................Write a Review................ */}
          <TouchableOpacity
            onPress={() => setWriteReviewModal(true)}
            style={{ flexDirection: "row", marginVertical: vs(10) }}
          >
            <CustomText
              text={"Write a Review"}
              fontWeight="bold"
              color={Colors.blue}
            />
            <Image source={icons.Pen} style={styles.icon} />
          </TouchableOpacity>
          {/* //.................write review...Modal.................. */}
          <Modal
            animationType="slide" // Use "slide" for sliding effect
            transparent={true}
            visible={writeReviewModal}
            onRequestClose={() => setWriteReviewModal(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modal}>
                <View style={styles.modalContent}>
                  <View style={styles.sheetHeader}>
                    <CustomText text={"Hobbit"} fontWeight="bold" size={20} />
                    <TouchableOpacity
                      onPress={() => setWriteReviewModal(false)}
                    >
                      <Image
                        source={icons.CloseBlack}
                        style={styles.closeIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <CustomText
                    text={
                      "Write about your experience reading Hobbit. We discourage spoilers. "
                    }
                    color={Colors.gray}
                  />
                  {/* ..........Rating.......... */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setRatingIndex(item)}
                      >
                        <Image
                          source={
                            item > ratingIndex ? icons.star : icons.starColored
                          }
                          style={styles.star}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                  <CustomTextInput
                    placeholder="Write a review..."
                    height={173}
                    alignItems="flex-start"
                  />
                </View>
                <CustomButton title="Submit" />
              </View>
            </View>
          </Modal>
          {/* ....................Recommended  Data............... */}
          <FlatList
            data={RecommendedData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              //paddingHorizontal: s(20),
              marginBottom: vs(65),
              gap: s(15),
            }}
            renderItem={({ item }) => (
              <BookCard
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
      </ScrollView>

      {/* ..............Btns................ */}
      <View style={[styles.btnsVw]}>
        <TouchableOpacity style={styles.btn} onPress={toggleBottomSheet}>
          <CustomText text={"Buy Now"} color={Colors.blue} />
        </TouchableOpacity>

        {showQuantity ? (
          <View style={styles.quantityBtnVw}>
            {/* ........................quantity Btns............................ */}
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={handleDecrease}
            >
              <Image source={icons.Minus} style={{ height: 10, width: 10 }} />
            </TouchableOpacity>
            <CustomText text={itemQuantity} size={12} />
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={handleIncrease}
            >
              <Image
                source={icons.PlusWhite}
                style={{ height: 10, width: 10 }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowQuantity(true)}
          >
            <CustomText text={"Add To Cart"} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.btn2}>
          <Image source={icons.Heart} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Image source={icons.Share} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/* ..................end................ */}

      {/* ..............BottomSheet.................. */}
      {bottomSheetIndex >= 0 && (
        <BottomSheet
          index={3} // Start at the first snap point, which is 75%
          snapPoints={snapPoints} // Pass the array with  snap points
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}
          onChange={(index) => setBottomSheetIndex(index)} // Track changes to the BottomSheet index
          backgroundStyle={{
            borderRadius: 30,
            backgroundColor: Colors.primary,
          }}
        >
          <BottomSheetView style={styles.bottomSheetContainer}>
            <View style={styles.sheetHeader}>
              <CustomText text={"Buy Now"} fontWeight="bold" size={18} />
              <TouchableOpacity onPress={toggleBottomSheet}>
                <Image source={icons.CloseBlack} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>

            <View style={{ gap: vs(5) }}>
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
              <View style={styles.buyerInfo}>
                <CustomText text={"Dispatch"} size={12} color={Colors.gray} />
                <CustomText
                  text={"359 American Scheme Block B9"}
                  size={12}
                  color={Colors.black}
                />
              </View>
              <View style={styles.buyerInfo}>
                <CustomText text={"Pay With"} size={12} color={Colors.gray} />
                <CustomText
                  text={"VISA ---- 1234"}
                  size={12}
                  color={Colors.black}
                />
              </View>
              <View style={styles.buyerInfo}>
                <CustomText text={"Total"} size={12} color={Colors.gray} />
                <CustomText
                  // text={"PKR 4,670"}
                  text={`${firstItem.AppPrice.currency}${
                    firstItem.AppPrice.value * bookQuantity
                  }`}
                  size={14}
                  color={Colors.black}
                  fontWeight={"bold"}
                />
              </View>
            </View>

            <View>
              <CustomButton
                title="Place order"
                fontSize={14}
                fontWeight={0}
                marginTop={15}
              />
              <CustomText
                text={"By  placing the order, you agree to the Readings"}
                size={14}
              />
              <View style={{ flexDirection: "row" }}>
                <CustomText
                  text={"Terms of service"}
                  color={Colors.blue}
                  textDecorationLine="underline"
                />
                <CustomText text={"  and "} />
                <CustomText
                  text={"privacy policy"}
                  color={Colors.blue}
                  textDecorationLine="underline"
                />
                <CustomText text={"."} />
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
      {/* ...............BottomSheet end................. */}
    </GestureHandlerRootView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.primary,
    textDecorationLine: "underline",
  },
  imgBG: {
    height: verticalScale(320),
    // height: 376,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    ...StyleSheet.absoluteFillObject, // This makes the overlay fill the entire ImageBackground
  },
  img: {
    height: verticalScale(190),
    width: scale(120),
    // height: 220,
    // width: 143,
  },
  content: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
  },
  AvailabilityVw: {
    //flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: verticalScale(15),
    gap: scale(5),
  },
  Avail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsVw: {
    gap: ms(12),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: vs(10),
  },
  detail: {
    backgroundColor: Colors.white,
    height: vs(50),
    width: scale(95),
    borderRadius: ms(10),
    paddingLeft: scale(4),
    paddingTop: scale(5),
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: s(100),
    // padding: ms(15),
    height: vs(45),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
  },
  btn2: {
    alignItems: "center",
    justifyContent: "center",
    width: s(45),
    //padding: ms(15),
    height: vs(45),
    backgroundColor: Colors.white,
    borderRadius: ms(10),
  },
  btnsVw: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: ms(1),
    borderColor: "#E3E5E7",
    backgroundColor: Colors.primary,
    opacity: 0.9,
    paddingVertical: vs(8),
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: scale(20),
  },
  icon: {
    height: vs(15),
    width: scale(15),
    marginLeft: scale(5),
  },
  AboutBook: {
    marginTop: vs(10),
  },
  bottomSheetContainer: {
    flex: 1,
    // alignItems: "center",
    // marginBottom: 25,
    marginHorizontal: s(20),
    marginVertical: vs(10),
    justifyContent: "space-between",
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
  buyerInfo: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: vs(40),
    //height: 48,
    borderRadius: ms(10),
    paddingHorizontal: s(10),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: vs(400),
    // height: 530,
    gap: vs(20),
  },
  modal: {
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
    padding: ms(20),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  star: {
    width: 40,
    height: 40,
  },
  quantityBtnVw: {
    flexDirection: "row",
    width: s(90),
    height: vs(32),
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: vs(10),
  },
  quantityBtn: {
    height: vs(20),
    width: s(20),
    backgroundColor: Colors.blue,
    borderRadius: ms(5),
    alignItems: "center",
    justifyContent: "center",
  },
});
