import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helper/common";
import { theme } from "../../styles/theme";
import { fonts } from "../../styles/font";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "../../components/MenuItem";

const LibraryScreen = () => {
  const navigation = useNavigation<any>();
  const handleMenuPress = (title: string) => {
    navigation.navigate(title);
  };
  const menuData = [
    {
      title: "Playlists",
      icon: "library-music",
      iconLibrary: "MaterialIcons",
      onPress: () => handleMenuPress("Playlists"),
    },
    {
      title: "Downloads",
      icon: "download",
      iconLibrary: "FontAwesome",
      onPress: () => handleMenuPress("Downloads"),
    },
    {
      title: "Podcasts",
      icon: "podcasts",
      iconLibrary: "MaterialIcons",
      onPress: () => handleMenuPress("Podcasts"),
    },
    {
      title: "Albums",
      icon: "album",
      iconLibrary: "MaterialIcons",
      onPress: () => handleMenuPress("Albums"),
    },
    {
      title: "Songs",
      icon: "music",
      iconLibrary: "FontAwesome",
      onPress: () => handleMenuPress("Songs"),
    },
    {
      title: "Artists",
      icon: "people",
      iconLibrary: "MaterialIcons",
      onPress: () => handleMenuPress("Artists"),
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
          <Text style={styles.Htitle}>My Library</Text>
        </View>
        {/* search and 3 dot icons */}
        <View style={styles.iconsDiv}>
          {/* search icon */}
          <Feather
            name="search"
            size={32}
            style={styles.headerIcons}
            color="black"
          />
          {/* 3 dot icons */}
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color="black"
            style={[styles.headerIcons]}
          />
        </View>
      </View>
      {/* Your History */}
      <View style={styles.TrendingItem}>
        <Text style={styles.TrendingTextTitle}>Your History</Text>
        <Pressable onPress={() => navigation.navigate("Historys")}>
          <Text style={styles.TextSeeAll}>See All</Text>
        </Pressable>
      </View>

      {/* dividing line */}
      <View style={styles.line} />

      {/* Services */}
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 20 }}>
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
    </SafeAreaView>
  );
};

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
    width: wp(10),
    height: hp(4.3),
  },
  // header title
  Htitle: {
    fontFamily: fonts.SemiBold,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: hp(2.4),
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
  TrendingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 7,
    marginTop: 13,
  },
  TrendingTextTitle: {
    fontFamily: fonts.Regular,
    fontSize: wp(6),
    fontWeight: theme.fontWeight.semiBold,
    paddingVertical: 14,
  },
  TextSeeAll: {
    fontFamily: fonts.Regular,
    fontWeight: theme.fontWeight.medium,
    fontSize: wp(4.2),
    color: theme.colors.green,
  },
  line: {
    borderWidth: 0.7,
    marginHorizontal: 15,
    borderColor: theme.colors.neutral(0.3),
    borderRadius: 100,
    borderCurve: "continuous",
  },
});

export default LibraryScreen;
