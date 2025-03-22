import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helper/common";
import { fonts } from "../../styles/font";
import { theme } from "../../styles/theme";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "../../components/AvatarBatch";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "../../components/MenuItem";
import { useAuthStore } from "../../store/authStore";

export default function ProfileScreen() {
  const navigation = useNavigation<any>();
  const {clearToken} = useAuthStore();
  const handleMenuPress = (title: string) => {
    navigation.navigate(title);
  };
  const menuData = [
    {
      title: "Profile",
      icon: "user",
      iconLibrary: "FontAwesome",
      onPress: () => handleMenuPress("UserInfo"),
    },
    {
      title: "Notification",
      icon: "notifications",
      iconLibrary: "Ionicons",
      onPress: () => handleMenuPress("Notification"),
    },
    {
      title: "Audio&Video",
      icon: "mic",
      iconLibrary: "Feather",
      onPress: () => handleMenuPress("AudioVideo"),
    },
    {
      title: "Playback",
      icon: "play-box-outline",
      iconLibrary: "MaterialCommunityIcons",
      onPress: () => handleMenuPress("Playback"),
    },
    {
      title: "DataSaver&Storage",
      icon: "checkbox",
      iconLibrary: "Ionicons",
      onPress: () => handleMenuPress("DataSaverStorage"),
    },
    {
      title: "Security",
      icon: "security",
      iconLibrary: "MaterialIcons",
      onPress: () => handleMenuPress("Security"),
    },
  ];
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
      <View style={{  paddingHorizontal: 15, paddingTop: 20 }}>
        {menuData.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            icons={item.icon}
            onPress={item.onPress}
            iconLibrary={
              item.iconLibrary as "MaterialIcons" | "FontAwesome" | "Ionicons"
            }
          />
        ))}
      </View>

      {/* Logout button */}
      <Pressable style={styles.logoutBtn} onPress={()=> clearToken()}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
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
    fontSize: wp(3.4),
  },
  logoutBtn:{
    borderWidth:1,
    padding:10,
    marginHorizontal:wp(28),
    alignItems:'center',
    borderRadius:10,
    backgroundColor:theme.colors.green,
    marginVertical:hp(2),
    borderCurve:'continuous',
  },
  logoutText:{
    color:theme.colors.white,
    fontFamily:fonts.Regular,
    fontSize:wp(5),
  }
});
