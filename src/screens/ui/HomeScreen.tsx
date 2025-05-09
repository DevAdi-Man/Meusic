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
import { useUserStore } from "../../store/userStore";
// import useAlbumStore from "../../store/useAlbum";
import { useTrendingStore } from "../../store/useMusicStore";
import { fetchTrendingTracks } from "../../api/music.api";
import { usePopularArtist } from "../../store/artistStore";
import { fetchingPopularArtist } from "../../api/artist.api";
import { useAlbumStore } from "../../store/useAlbum";
import axios from "axios";
import { useAuthStore } from "../../store/authStore";
import { useTrack } from "../../store/useTrackStore";
import { fetchTopTrack } from "../../api/topTracks.api";

// Imports End here ---------------------->
export default function HomeScreen() {
  // const isImgPresent = true;
  const [greeting, setGreeting] = useState("");
  const navigation = useNavigation<any>();
  // fetching user
  const { user } = useUserStore();
  //fetching all album data
  const { albums, setAlbums } = useAlbumStore();
  const trending = useTrendingStore((state) => state.trending);
  const { setArtist,artists } = usePopularArtist();
  const {tracks,setTracks} = useTrack();
  // console.log("user is ---> ",albums);
  useEffect(() => {
    setGreeting(getTime());
    setAlbums();
    fetchTrendingTracks();
  }, []);
  // fetching  Popular artist
  useEffect(() => {
    // also can send parameter query and limit
    const loadPopularArtist = async () => {
      try {
        const PopularArtist = await fetchingPopularArtist();
        setArtist(PopularArtist);
      } catch (error) {
        console.error("Error While fetching Popular artist : ",error);
      }
    };
    loadPopularArtist();
  }, []);
useEffect(() => {
  const loadHomeTopTracks = async () => {
    try {
      const top10 = await fetchTopTrack(10); // Only 10 for HomeScreen
      setTracks(top10);
    } catch (error) {
      console.error("Error fetching top tracks for HomeScreen", error);
    }
  };

  loadHomeTopTracks();
}, []);
  // console.log('tracks--> ',tracks)
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Profile Info */}
        <Avatar
          name={user?.display_name ?? ""}
          imageUrl={user?.images[0]?.url}
          size={60}
        />
        <View style={styles.userProfile}>
          <Text style={styles.TextGreeting}>{greeting}</Text>
          {/* user name */}
          <Text style={styles.userNameText}>
            {user?.display_name.toUpperCase()}
          </Text>
        </View>

        {/* Search icons (SAN means search and Notifications container) */}
        <View style={styles.SANContainer}>
          <Pressable onPress={() => navigation.navigate("Explore")}>
            <Feather name="search" size={32} color="black" />
          </Pressable>
          <Ionicons name="notifications" size={28} color="black" />
        </View>
      </SafeAreaView>

      <SafeAreaView style={{ marginBottom: 52, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Trending Now */}
          <View style={[styles.TrendingContainer, { marginTop: hp(3.2) }]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Trending Now</Text>
              <Pressable onPress={() => navigation.navigate("TrendingNow")}>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.TreandingScroll}
            >
              {trending.map((song) => (
                <MusicShowcase
                  key={song.id}
                  songName={song.songName}
                  singerName={song.singerName}
                  imgUrl={song.imgUrl}
                />
              ))}
            </ScrollView>
          </View>

          {/* Popular Artists */}
          <View style={[styles.TrendingContainer]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Popular Artists</Text>
              <Pressable onPress={() => navigation.navigate("PopularArtists")}>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.TreandingScroll}
            >
              {artists.map((artist)=>(
                <MusicShowcase 
                key={artist.id}
                singerName={artist.name}
                imgUrl={artist.imageUrl}
                borderRadius={100}
                alignItems="center"
                 />
              ))}
            </ScrollView>
          </View>

          {/* Top Charts */}
          <View style={[styles.TrendingContainer]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Top Albums</Text>
              <Pressable onPress={() => navigation.navigate("TopCharts")}>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.TreandingScroll}
            >
              {albums.map((album)=>(
                <MusicShowcase
                  key={album.id}
                  songName={album.name}
                  imgUrl={album.images?.[0]?.url } 
                />
              ))}
            </ScrollView>
          </View>

          <View style={[styles.TrendingContainer]}>
            <View style={styles.TrendingItem}>
              <Text style={styles.TrendingTextTitle}>Top Tracks</Text>
              <Pressable onPress={() => navigation.navigate("TopTrack")}>
                <Text style={styles.TextSeeAll}>See All</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.TreandingScroll}
            >
             {tracks.map((track)=>(
              <MusicShowcase 
                key={track.id}
                imgUrl={track.imgUrl}
                singerName={track.singerName}
              />
             ))}
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
    // flexDirection: "column",
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
  TreandingScroll: {
    paddingHorizontal: wp(2),
  },
});
