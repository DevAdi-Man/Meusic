import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import { fonts } from "../styles/font";
import { theme } from "../styles/theme";

interface CardProps {
  title?: string;
  imgUrl?: string;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ title, imgUrl, backgroundColor = "#ddd" }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.testText}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imgUrl }} style={styles.cardImage} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    marginTop: 20,
    width: wp(42),
    height: hp(10),
    marginHorizontal: 12,
    borderRadius: 7,
    flexDirection: "row",
    overflow: "hidden",
  },
  testText: {
    fontFamily: fonts.SemiBold,
    fontSize: wp(4.2),
    fontWeight: theme.fontWeight.semiBold,
    width: "50%",
    paddingLeft: 4,
    paddingTop: 4,
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
