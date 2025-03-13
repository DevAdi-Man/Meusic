import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../styles/theme";
import { fonts } from "../styles/font";
import { hp, wp } from "../helper/common";
import { useNavigation } from "@react-navigation/native";

interface SectionProps{
    title : string,
}

const SearchAndBackHeader:React.FC<SectionProps> = ({title}) => {
  const [isSearching, setIsSearching] = useState(false);
  const searchWidth = useSharedValue(50); // Initial width of search bar
  const navigation = useNavigation<any>();
  const handleSearchToggle = () => {
    searchWidth.value = withTiming(isSearching ? 50 : 250);
    setIsSearching(!isSearching);
  };

  const handleBlur = () => {
    // When the search box loses focus, shrink it back
    searchWidth.value = withTiming(50);
    setIsSearching(false);
  };

  const animatedSearchStyle = useAnimatedStyle(() => ({
    width: searchWidth.value+70,
  }));

  return (
    <View style={styles.container}>
      {/* Back button & Title (Hidden when searching) */}
      {!isSearching && (
        <View style={styles.backButton}>
          <Pressable onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back-outline" style={styles.IconsStyle}  />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {/* Animated Search Bar */}
      {isSearching && (
        <Animated.View style={[styles.searchContainer, animatedSearchStyle]}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={theme.colors.neutral(0.7)}
            style={styles.input}
            autoFocus={true} // Automatically focus on input when opened
            onBlur={handleBlur} // Shrink when losing focus
          />
        </Animated.View>
      )}
      {/* Search / Close Button */}
      <TouchableOpacity onPress={handleSearchToggle} style={styles.iconButton}>
        <Ionicons
          name={isSearching ? "close" : "search"}
          style={styles.IconsStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "transparent",
    // borderRadius: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    gap:10
  },
  title: {
    color: theme.colors.black,
    fontFamily:fonts.Medium,
    fontSize: wp(4.7),
  },
  searchContainer: {
    height: hp(5.5),
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor:theme.colors.grayBg
  },
  input: {
    color: theme.colors.neutral(0.7),
    fontSize: 16,
    width: wp(80),
    fontFamily:fonts.Regular
    // borderWidth:2
  },
  iconButton: {
    padding: 10,
  },
  IconsStyle:{
    fontFamily:fonts.SemiBold,
    fontSize:wp(7),
    fontWeight:theme.fontWeight.semiBold
  }
});

export default SearchAndBackHeader;
