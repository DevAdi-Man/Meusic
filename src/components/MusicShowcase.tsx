import { View, Text, StyleSheet, Image, Pressable, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import { fonts } from "../styles/font";
import { theme } from "../styles/theme";

type FlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

interface SHowCaseProps {
  imgUrl?: string;
  singerName?: string;
  size?: number;
  songName?: string;
  Top?: string;
  borderRadius?: number;
  alignItems?: FlexAlignType;
  height?: number;
  onPress?: ()=> void;
}

const MusicShowcase: React.FC<SHowCaseProps> = ({
  imgUrl,
  singerName,
  songName,
  onPress,
  size = 50,
  borderRadius = 13,
  alignItems = "flex-start",
}) => {
  return (
    <TouchableOpacity
      onPress={()=> onPress}
      style={[
        styles.container,
        {
          width: wp(size / 1.449),
          // height: hp(size / 2.5),
          borderRadius: 13,
          flexDirection: "column",
          alignItems: alignItems,
        },
      ]}
    >
      <Image
        source={imgUrl ? { uri: imgUrl } : require("../../assets/icon.png")}
        style={[
          styles.img,
          {
            width: wp(size / 1.5),
            height: hp(size / 3.3),
            borderRadius: borderRadius,
          },
        ]}
        resizeMode="cover"
      />

      <View>
        {singerName ? (
          <Text style={styles.TextName} numberOfLines={1} ellipsizeMode="tail">
            {singerName}
          </Text>
        ) : null}
        {songName ? (
          <Text style={styles.TextName} numberOfLines={1} ellipsizeMode="tail">
            {songName}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginBottom:12,
  },
  img: {
    // borderWidth: 2,
    overflow: "hidden",
    marginBottom: 4,
  },
  TextName: {
    fontFamily: fonts.Medium,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: wp(3.2),
    paddingLeft: 7,
    color: theme.colors.neutral(0.4),
    paddingBottom: 5,
  },
});

export default MusicShowcase;
