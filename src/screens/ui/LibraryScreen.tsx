import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helper/common";
import { theme } from "../../styles/theme";
import { fonts } from "../../styles/font";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "../../components/MenuItem";
import { usePlayedHistory } from "../../store/usePlayedHistoryStore";
import { fetchSongPlayedHistory } from "../../api/playerHistory.api";
import { useAuthStore } from "../../store/authStore";
import { FlashList } from "@shopify/flash-list";
import MusicShowcase from "../../components/MusicShowcase";
import useAudioStore from "../../store/usePlayerStore";

const LibraryScreen = () => {
  const navigation = useNavigation<any>();
  const { recentlyPlayed, setRecentlyPlayed, loading, setLoading, setError } =
    usePlayedHistory();
  const { accessToken } = useAuthStore();

  const { setCurrentTrack, loadAudio, playSound } = useAudioStore();
  const loadHistory = async () => {
    if (!accessToken) return;
    try {
      setLoading(true);
      const history = await fetchSongPlayedHistory(accessToken, 15);
      setRecentlyPlayed(history);
    } catch (error) {
      setError("Unable to fetch song history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, [accessToken]);

  const menuData = [
    {
      title: "Playlists",
      icon: "library-music",
      iconLibrary: "MaterialIcons",
      onPress: () => navigation.navigate("Playlists"),
    },
    {
      title: "Downloads",
      icon: "download",
      iconLibrary: "FontAwesome",
      onPress: () => navigation.navigate("Downloads"),
    },
    {
      title: "Podcasts",
      icon: "podcasts",
      iconLibrary: "MaterialIcons",
      onPress: () => navigation.navigate("Podcasts"),
    },
    {
      title: "Albums",
      icon: "album",
      iconLibrary: "MaterialIcons",
      onPress: () => navigation.navigate("Albums"),
    },
    {
      title: "Songs",
      icon: "music",
      iconLibrary: "FontAwesome",
      onPress: () => navigation.navigate("Songs"),
    },
    {
      title: "Artists",
      icon: "people",
      iconLibrary: "MaterialIcons",
      onPress: () => navigation.navigate("Artists"),
    },
  ];
  const handlePlayTrack = async (track: any) => {
    try {
      console.log("Pressed track:", track.songName, track.audioUrl);

      const isValidRemoteUrl =
        typeof track.audioUrl === "string" && track.audioUrl.startsWith("http");

      const audioUri = isValidRemoteUrl ? track.audioUrl : "fallback"; // just a flag, actual fallback is handled in store

      setCurrentTrack(track);
      await loadAudio(audioUri);
      await playSound();
    } catch (error) {
      console.error("Error playing track:", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.safeArea}>
        <View style={styles.iconsDiv}>
          <Image
            source={require("../../../assets/musicNote.png")}
            style={styles.svgIcon}
          />
          <Text style={styles.Htitle}>My Library</Text>
        </View>
        <View style={styles.iconsDiv}>
          <Feather name="search" size={32} style={styles.headerIcons} />
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={32}
            style={styles.headerIcons}
          />
        </View>
      </View>

      {/* History Section */}
      <View style={styles.TrendingItem}>
        <Text style={styles.TrendingTextTitle}>Your History</Text>
        <Pressable onPress={() => navigation.navigate("Historys")}>
          <Text style={styles.TextSeeAll}>See All</Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.green} />
      ) : (
        <FlashList
          estimatedItemSize={20}
          data={recentlyPlayed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MusicShowcase
              imgUrl={item.imgUrl}
              singerName={item.singerName}
              songName={item.songName}
              onPress={() => {
                console.log("Pressed track:", item.songName);
                handlePlayTrack(item);
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <View style={styles.line} />

      {/* Menu Items */}
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
  listContainer: { paddingHorizontal: 10 },
  row: { justifyContent: "space-around" },
});

export default LibraryScreen;
