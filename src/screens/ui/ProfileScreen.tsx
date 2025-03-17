import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helper/common";
import { fonts } from "../../styles/font";
import { theme } from "../../styles/theme";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "../../components/AvatarBatch";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Library Header Seaction  */}
      <View style={styles.safeArea}>
        <View style={styles.iconsDiv}>
          {/* icons */}
          <Image
            source={require("../../../assets/musicNote.png")}
            style={styles.svgIcon}
          />
          {/* Screen title */}
          <Text style={styles.Htitle}>Profile</Text>
        </View>
        {/* search and 3 dot icons */}
        <View style={styles.iconsDiv}>
          {/* 3 dot icons */}
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color="black"
            style={[styles.headerIcons]}
          />
        </View>
      </View>

      {/* User Profile Section  */}
      <View style={styles.userProfileContainer}>
        <Avatar
          name=""
          imageUrl={require("../../../assets/boy.jpg")}
          size={80}
        />
        <View style={styles.userProfileInfo}>
          {/* user name */}
          <Text style={styles.userProfileTextName}>Aditya Raj</Text>
          {/* user email */}
          <Text style={styles.userProfileTextEmail}>
            adityaraj99106@gmail.com
          </Text>
        </View>
      </View>

      {/* Ads Banner */}

      {/* Services components */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: 25,
    margin: 7,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  svgIcon: {
    width: wp(9.8),
    height: hp(4.3),
  },
  // header title
  Htitle: {
    fontFamily: fonts.SemiBold,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: hp(2.7),
  },
  headerIcons: {
    color: theme.colors.neutral(0.789),
    fontSize: wp(8.4),
    fontWeight: theme.fontWeight.medium,
    paddingRight: 7,
  },
  iconsDiv: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  userProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'space-evenly',
    paddingHorizontal: 15,
    paddingTop: 30,
    gap: 20,
  },
  userProfileInfo: {
    flexDirection: "column",
    gap: 5,
  },
  userProfileTextName: {
    fontFamily: fonts.Medium,
    fontSize: wp(5.5),
    fontWeight: theme.fontWeight.medium,
  },
  userProfileTextEmail: {
    fontFamily: fonts.Light,
    fontSize:wp(3.4)
  },
});
