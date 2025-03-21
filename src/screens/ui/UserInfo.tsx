import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { hp, wp } from "../../helper/common";
import { fonts } from "../../styles/font";
import { theme } from "../../styles/theme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Avatar from "../../components/AvatarBatch";
import { useNavigation } from "@react-navigation/native";
import { data } from "../../utils/data";
import MusicShowcase from "../../components/MusicShowcase";
const UserInfo = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer}>
          {/* back icons */}
          <Ionicons
            name="arrow-back-outline"
            style={styles.icons}
            color="black"
            onPress={() => navigation.goBack()}
          />
          {/* profile text */}
          <Text style={styles.TextOne}>Profile</Text>
        </View>
        {/* edit icons */}
        <FontAwesome6 name="edit" style={[styles.editIcon]} color="black" />
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <>
            {/* Avatar or user Image */}
            <View style={styles.AvatarContainer}>
              <Avatar
                name="user"
                size={hp(25)}
                imageUrl={require("../../../assets/boy.jpg")}
              />
              <Text style={styles.userName}>Aditya Raj</Text>
            </View>
            {/* Edit buttom */}
            <View style={styles.editContainer}>
              <Pressable style={styles.editButton} onPress={()=> navigation.navigate('EditProfile')}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </Pressable>
            </View>
            {/* dividing line */}
            <View style={styles.line} />

            {/* Follower and Following */}
            <View style={styles.FandFContainer}>
              {/* followers */}
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.FAndFContentTextOne}>2,739</Text>
                <Text style={styles.FAndFContentTextTwo}>Followers</Text>
              </View>
              {/* Following */}
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.FAndFContentTextOne}>347</Text>
                <Text style={styles.FAndFContentTextTwo}>Following</Text>
              </View>
            </View>
            {/* dividing line */}
            <View style={styles.line} />
            {/* Playlists */}
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Playlists</Text>
              <Pressable onPress={() => navigation.navigate("Playlists")}>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
          </>
        }
        renderItem={({ item }) => {
          // console.log('item--> ',item.song)
          return (
            <>
              <MusicShowcase
                imgUrl={item.image}
                singerName={item.song}
                songName={item.singer}
              />
            </>
          );
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingHorizontal: 8,
    gap: 15,
    // borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    fontSize: wp(8.6),
  },
  TextOne: {
    fontFamily: fonts.SemiBold,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: hp(3),
  },
  editIcon: {
    fontSize: wp(7),
    paddingRight: 12,
  },
  AvatarContainer: {
    // borderWidth:2,
    flexDirection: "column",
    // justifyContent:'center',
    alignItems: "center",
    marginTop: hp(5),
  },
  userName: {
    fontFamily: fonts.Regular,
    fontSize: hp(4),
    marginTop: hp(1.2),
    fontWeight: theme.fontWeight.medium,
  },
  editContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(2),
  },
  editButton: {
    borderWidth: 1.5,
    padding: 7,
    borderRadius: 100,
    borderColor: theme.colors.green,
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
    fontSize: hp(1.8),
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.green,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  line: {
    borderWidth: 0.7,
    marginHorizontal: 15,
    borderColor: theme.colors.neutral(0.3),
    borderRadius: 100,
    borderCurve: "continuous",
  },
  FandFContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: hp(1.4),
  },
  FAndFContentTextOne: {
    padding: 3,
    fontFamily: fonts.SemiBold,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: hp(3),
    color: theme.colors.black,
  },
  FAndFContentTextTwo: {
    fontFamily: fonts.Regular,
    fontWeight: theme.fontWeight.medium,
    fontSize: wp(4.6),
    color: theme.colors.neutral(0.4),
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: "space-around",
  },
  TrendingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(3),
    // borderWidth: 2,
  },
  TrendingTextTitle: {
    fontFamily: fonts.Regular,
    fontSize: wp(6.1),
    fontWeight: theme.fontWeight.semiBold,
    paddingVertical: 14,
  },
  TextSeeAll: {
    fontFamily: fonts.Regular,
    fontWeight: theme.fontWeight.medium,
    fontSize: wp(4.2),
    color: theme.colors.green,
  },
});

export default UserInfo;
