import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Avatar from "../../components/AvatarBatch";
import { getTime } from "../../utils/getTime";
import { theme } from "../../styles/theme";
import { fonts } from "../../styles/font";
import MusicShowcase from "../../components/MusicShowcase";
import { hp, wp } from "../../helper/common";
//icons Imports Starts ------------------->
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

// Imports End here ---------------------->
export default function HomeScreen() {
  // const isImgPresent = true;
  const [greeting, setGreeting] = useState("");
  const navigation = useNavigation<any>();
  useEffect(() => {
    setGreeting(getTime());
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Profile Info */}
        <Avatar name="Aditya" size={60} />
        <View style={styles.userProfile}>
          <Text style={styles.TextGreeting}>{greeting}</Text>
          {/* user name */}
          <Text style={styles.userNameText}>Aditya raj</Text>
        </View>

        {/* Search icons (SAN means search and Notifications container) */}
        <View style={styles.SANContainer}>
          <Feather name="search" size={32} color="black" />
          <Ionicons name="notifications" size={28} color="black" />
        </View>
      </SafeAreaView>

      <SafeAreaView style={{marginBottom:52,flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Trending Now */}
          <View style={[styles.TrendingContainer, { marginTop: hp(3.2) }]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Trending Now</Text>
              <Pressable onPress={()=> navigation.navigate('TrendingNow')}>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MusicShowcase
                songName="Band Darwaze"
                singerName="Amrinder Gill"
              />
              <MusicShowcase singerName="DIVINE" songName="3:59 AM" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
              <MusicShowcase songName="Lalkaara" singerName="Diljit Dosanjh" />
            </ScrollView>
          </View>

          {/* Popular Artists */}
          <View style={[styles.TrendingContainer]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Popular Artists</Text>
              <Pressable>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MusicShowcase
                singerName="Amrinder Gill"
                borderRadius={100}
                size={54}
                alignItems="center"
              />
              <MusicShowcase
                alignItems="center"
                songName="3:59 AM"
                borderRadius={100}
                size={54}
              />
              <MusicShowcase
                alignItems="center"
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
              />
              <MusicShowcase
                alignItems="center"
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
              />
              <MusicShowcase
                alignItems="center"
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
              />
              <MusicShowcase
                alignItems="center"
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
              />
              <MusicShowcase
                alignItems="center"
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
              />
              <MusicShowcase
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
                alignItems="center"
              />
              <MusicShowcase
                singerName="Diljit Dosanjh"
                borderRadius={100}
                size={54}
                alignItems="center"
              />
            </ScrollView>
          </View>

          {/* Top Charts */}
          <View style={[styles.TrendingContainer]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Top Charts</Text>
              <Pressable>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MusicShowcase
                // singerName="Amrinder Gill"
                borderRadius={45}
                size={50}
                alignItems="center"
              />
              <MusicShowcase
                alignItems="center"
                // songName="3:59 AM"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
                alignItems="center"
              />
              <MusicShowcase
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
                alignItems="center"
              />
            </ScrollView>
          </View>

          <View style={[styles.TrendingContainer]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Top Charts</Text>
              <Pressable>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MusicShowcase
                // singerName="Amrinder Gill"
                borderRadius={45}
                size={50}
                alignItems="center"
              />
              <MusicShowcase
                alignItems="center"
                // songName="3:59 AM"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                alignItems="center"
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
              />
              <MusicShowcase
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
                alignItems="center"
              />
              <MusicShowcase
                // singerName="Diljit Dosanjh"
                borderRadius={45}
                size={50}
                alignItems="center"
              />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: 40,
    margin: 5,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-around",
    // borderWidth: 2,
  },
  TextGreeting: {
    fontSize: wp(5),
    fontWeight: theme.fontWeight.semiBold,
    fontFamily: fonts.Bold,
    height: hp(3.7),
  },
  userProfile: {
    paddingRight: 20,
    // borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  userNameText: {
    paddingLeft: 5,
    fontSize: wp(5),
    fontWeight: theme.fontWeight.medium,
    fontFamily: fonts.Regular,
  },
  SANContainer: {
    flexDirection: "row",
    gap: wp(5),
    marginLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  TrendingContainer: {
    flexDirection: "column",
    // marginTop: hp(4),
    marginHorizontal: wp(3),
  },
  TrendingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
