import React, { useCallback, useMemo, useRef, useState } from "react";
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
import { ms, s, vs } from "react-native-size-matters";
import imgs from "../../../assets/imgs";
import CustomText from "../../../components/CustomText";
import { Colors } from "../../../utils/Colors";
import icons from "../../../assets/icons";
import BookReviews from "../../../components/Book Reviews";
import BookCard from "../../../components/BookCard";
import { RecommendedData, CartItemsData } from "../../../utils/Data/data";
//....,,,,,,,,,,,,,,...BottomSheet........
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import BookCardLiked from "../../../components/BookCardLiked";
import ModalScreen from "../../../components/ModalScreen";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
// ..................types.....................

interface BookDetailsProps {
  navigation: StackNavigationProp<RootStackParamsList, "BookDetails">;
}

//............................main func....................
const BookDetails = ({ navigation }: BookDetailsProps) => {
  //...for buy Now Bottom Sheet
  const buyNowbottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["70%", "60%", "50%"], []);
  const openBottomSheet = () => {
    buyNowbottomSheetModalRef.current?.present(); // Open the BottomSheet
  };
  const handleDismiss = () => {
    buyNowbottomSheetModalRef.current?.dismiss(); // close bottom sheet
  };
  //...for write review Bottom Sheet
  const writwReviewSheetRef = useRef<BottomSheetModal>(null);
  // const snapPoints2 = useMemo(() => ["90%", "80%", "70%"], []);
  const openBottomSheet2 = () => {
    writwReviewSheetRef.current?.present(); // Open the BottomSheet
  };
  const handleDismiss2 = () => {
    writwReviewSheetRef.current?.dismiss(); // close bottom sheet
  };
  //..Handle quantity change in bottom sheet
  const handleQuantityChange = (id: string, itemQuantity: number) => {
    setBookQuantity(itemQuantity);
  };
  const [bookQuantity, setBookQuantity] = useState(0);

  // Access the first object in the data array
  const firstItem = CartItemsData[0];
  //...............for  stars rating..................
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
  //...for review added modal
  const [reviewAddedModal, setReviewAddedModal] = useState(false);
  //..for order receive modal
  const [orderReceiveModal, setOrderReceiveModal] = useState(false);
  //..handle revie submit button
  const handleReviewSubmit = () => {
    writwReviewSheetRef.current?.dismiss(); // close bottom sheet
    setTimeout(() => {
      setReviewAddedModal(true);
    }, 1000);
  };
  //...........main func return.......
  return (
    <BottomSheetModalProvider>
      <View style={styles.main}>
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
                  text={"£12.99 = Rs.4746"}
                  color={Colors.black}
                  style={{ textDecorationLine: "line-through" }}
                />
              </View>
              <View style={styles.Avail}>
                <CustomText text={"App Price(10% OFF)"} color={Colors.gray} />
                <CustomText
                  text={"Rs.2335"}
                  fontWeight="bold"
                  // fontFam={Fonts.semiBold}
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
                <CustomText
                  text={"Category"}
                  color={Colors.gray}
                  // lineHeight={14}
                />
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
                style={{ textAlign: "justify" }}
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
                style={{ textAlign: "justify" }}
                color={Colors.gray2}
              />
            </View>
            {/* .................Book Reviews...................... */}
            <CustomText
              text={"Book Reviews"}
              fontWeight="bold"
              size={18}
              style={{ marginTop: vs(10) }}
            />
            <View style={{ marginHorizontal: s(-20) }}>
              <BookReviews />
            </View>
            {/* ..................Write a Review................ */}
            <TouchableOpacity
              onPress={openBottomSheet2}
              style={{ flexDirection: "row", marginVertical: vs(10) }}
            >
              <CustomText
                text={"Write a Review"}
                fontWeight="bold"
                color={Colors.blue}
              />
              <Image source={icons.Pen} style={styles.icon} />
            </TouchableOpacity>
            {/* //.................write review...bottom Sheet.................. */}
            <CustomBottomSheet
              bottomSheetModalRef={writwReviewSheetRef}
              snapPoints={snapPoints}
              onDismiss={handleDismiss2}
              backgroundColor={Colors.primary}
            >
              <View>
                <View style={styles.modal}>
                  <View style={styles.modalContent}>
                    <View style={styles.sheetHeader}>
                      <CustomText text={"Hobbit"} fontWeight="bold" size={20} />
                      <TouchableOpacity onPress={handleDismiss2}>
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
                              item > ratingIndex
                                ? icons.star
                                : icons.starColored
                            }
                            style={styles.star}
                          />
                        </TouchableOpacity>
                      ))}
                    </View>

                    <CustomTextInput
                      placeholder="Write a review..."
                      inputContainerStyle={{
                        height: vs(173),
                        alignItems: "flex-start",
                      }}
                    />
                  </View>
                  <CustomButton title="Submit" onPress={handleReviewSubmit} />
                </View>
              </View>
            </CustomBottomSheet>
            {/* //..review added modal */}
            {reviewAddedModal ? (
              <Modal
                visible={reviewAddedModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setReviewAddedModal(false)}
              >
                {/* <View style={styles.modalOverlay}>
                  <View style={styles.modalContent2}>
                    <Image source={imgs.ok} style={styles.okicon} />
                    <CustomText
                      text="Review Added"
                      size={20}
                      fontWeight={"bold"}
                      style={{ marginTop: vs(35) }}
                    />
                    <CustomText
                      text="Your review for the book <bookname> has been posted successfully."
                      color={Colors.gray}
                      style={{
                        textAlign: "center",
                        marginHorizontal: s(40),
                        marginTop: vs(10),
                      }}
                    />
                    <CustomButton
                      title="Great!"
                      buttonStyle={{ marginTop: vs(45) }}
                      onPress={() => setReviewAddedModal(false)}
                    />
                  </View>
                </View> */}
                <ModalScreen
                  img={imgs.ok}
                  heading="Review Added"
                  status="Your review for the book <bookname> has been posted successfully."
                  btnTitle="Great!"
                  onPress={() => setReviewAddedModal(false)}
                />
              </Modal>
            ) : null}
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

        {/* ............Bottom..Btns................ */}
        <View style={[styles.btnsVw]}>
          {/* <TouchableOpacity style={styles.btn} onPress={toggleBottomSheet}> */}
          <TouchableOpacity style={styles.btn} onPress={openBottomSheet}>
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
              <CustomText text={itemQuantity.toString()} size={12} />
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
              style={[styles.btn, { backgroundColor: Colors.blue }]}
              onPress={() => setShowQuantity(true)}
            >
              <CustomText text={"Add To Cart"} color={Colors.white} />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.btn2}>
            <Image source={icons.Heart} style={styles.icon2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Image source={icons.Share} style={styles.icon2} />
          </TouchableOpacity>
        </View>
        {/* ..................end................ */}

        {/* .........BottomSheet.  for buy now................. */}
        <CustomBottomSheet
          bottomSheetModalRef={buyNowbottomSheetModalRef}
          snapPoints={snapPoints}
          onDismiss={handleDismiss}
          backgroundColor={Colors.primary}
        >
          <View style={styles.bottomSheetContainer}>
            <View style={styles.sheetHeader}>
              <CustomText text={"Buy Now"} fontWeight="bold" size={18} />
              <TouchableOpacity onPress={handleDismiss}>
                <Image source={icons.CloseBlack} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            {/* //..book card in buy now bottom sheet */}
            <View style={{ gap: vs(5), marginTop: vs(20) }}>
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
              {/* //..order details in buy now bottom sheet */}
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
                buttonStyle={{ marginTop: vs(15) }}
                onPress={() => setOrderReceiveModal(true)}
              />
              <CustomText
                text={"By  placing the order, you agree to the Readings"}
                size={14}
              />
              <View style={{ flexDirection: "row" }}>
                <CustomText
                  text={"Terms of service"}
                  color={Colors.blue}
                  style={{ textDecorationLine: "underline" }}
                />
                <CustomText text={"  and "} />
                <CustomText
                  text={"privacy policy"}
                  color={Colors.blue}
                  style={{ textDecorationLine: "underline" }}
                />
                <CustomText text={"."} />
              </View>
            </View>
            {/* .....end of....BottomSheet for buy now................. */}
          </View>
        </CustomBottomSheet>
        {/* ...............place order modal................. */}
        {orderReceiveModal ? (
          <Modal>
            <ModalScreen
              img={imgs.gift}
              heading="Order Received"
              status="Thanks for shopping with Readings. We have received your order. You can check the status of your order in the orders tab and track in real time."
              btnTitle="Back to Home"
              onPress={() => navigation.navigate("BottomTab")}
            />
          </Modal>
        ) : null}
      </View>
    </BottomSheetModalProvider>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.primary,
    // textDecorationLine: "underline",
  },
  imgBG: {
    height: vs(320),
    // height: 376,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    ...StyleSheet.absoluteFillObject, // This makes the overlay fill the entire ImageBackground
  },
  img: {
    height: vs(190),
    width: s(120),
    // height: 220,
    // width: 143,
  },
  content: {
    marginHorizontal: s(20),
    marginVertical: vs(10),
  },
  AvailabilityVw: {
    //flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: vs(15),
    gap: s(5),
  },
  Avail: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 0.5,
    alignItems: "center",
  },
  detailsVw: {
    gap: ms(12),
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    marginTop: vs(10),
  },
  detail: {
    backgroundColor: Colors.white,
    height: vs(50),
    width: s(95),
    borderRadius: ms(10),
    paddingLeft: s(10),
    paddingVertical: s(5),
    justifyContent: "center",
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
    paddingHorizontal: s(20),
  },
  icon: {
    height: vs(15),
    width: s(15),
    marginLeft: s(5),
  },
  icon2: {
    height: vs(20),
    width: s(20),
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
    alignItems: "center",
  },
  modalContent: {
    height: vs(400),
    // height: 530,
    gap: vs(20),
  },
  modalContent2: {
    height: vs(350),
    //height: 400,
    width: s(260),
    //width: 300,

    backgroundColor: Colors.white,
    borderRadius: ms(20),
    alignItems: "center",
    paddingVertical: vs(40),
    paddingHorizontal: s(20),
  },
  okicon: {
    height: vs(85),
    width: s(85),
    //height: 96,
    // width: 96,
    resizeMode: "contain",
  },
  modal: {
    backgroundColor: Colors.primary,
    // justifyContent: "space-between",
    paddingHorizontal: ms(20),
  },
  // star: {
  //   width: 40,
  //   height: 40,
  // },
  star: {
    width: s(35),
    height: vs(35),
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
