import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import { fonts } from "../styles/font";
import { theme } from "../styles/theme";

interface CardProps {
  title?: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      {/* Left Side - Title */}
      <Text style={styles.testText}>{title}</Text>
      {/* Right Side -- image */}
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/icon.png")} style={styles.cardImage} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginTop: 20,
    width: wp(42),
    height: hp(10),
    marginHorizontal: 12,
    borderRadius: 7,
    flexDirection: "row",
    overflow:'hidden'
  },
  // test only
  testText: {
    fontFamily:fonts.SemiBold,
    fontSize:wp(5),
    fontWeight:theme.fontWeight.semiBold,
    width: "50%",
    paddingLeft:4,
    paddingTop:4,
  },
  imageContainer: {
    position: "absolute",
    right: -7,
    bottom: 0,
    transform: [{ rotate: "15deg" }],
  },
  cardImage: {
    width: wp(21),
    height: hp(8),
    borderRadius: 8,
  },
});
