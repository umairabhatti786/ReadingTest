import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Colors } from "../../utils/Colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
type DropdownItem = {
  label: string;
  value: string | number;
};
type DropdownPrpos = {
  value?: DropdownItem | null;
  placeholder?: string;
  data: Array<DropdownItem>;
  onChange: (value: DropdownItem) => void;
  searchPlaceholder?: string;
  maxHeight?: number;
  width?: number;
};

const DropDown = ({
  value,
  data,
  placeholder = "Select an option",
  onChange,
  searchPlaceholder = "Search...",
  maxHeight = 300,
  width,
}: DropdownPrpos) => {
  const [country, setCountry] = useState("1");

  return (
    <Dropdown
      style={[styles.dropdown, { width }]} // Apply dynamic width
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      // imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      iconColor={Colors.orange}
      search
      maxHeight={maxHeight}
      value={value}
      data={data}
      valueField="value"
      labelField="label"
      // imageField="image"
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      onChange={(item) => {
        onChange(item); // Return the entire selected object
      }}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    padding: moderateScale(10),
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 8,
  },
  iconStyle: {
    width: scale(20),
    height: verticalScale(20),
  },
  inputSearchStyle: {
    height: verticalScale(40),
    fontSize: 14,
  },
});
