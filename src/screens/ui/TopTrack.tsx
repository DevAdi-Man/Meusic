// TopTrack.tsx
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import MusicShowcase from "../../components/MusicShowcase";
import { useTrack } from "../../store/useTrackStore";
import { fetchTopTrack } from "../../api/topTracks.api";
import { Audio } from "expo-av";
import { usePlayer } from "../../store/usePlayerStore";

// Define expected structure
interface TrackType {
  id: string;
  songName: string;
  singerName: string;
  imgUrl: string;
  spotifyUrl: string;
  preview_url?: string;
  name?: string;
  artists?: { name: string }[];
  images?: { url: string }[];
}

export default function TopTrack() {
  const { tracks, setTracks } = useTrack();
  // const { setCurrentTrack, setIsPlaying } = usePlayer();
  const soundRef = useRef<Audio.Sound | null>(null);



  // Fetch top tracks
  useEffect(() => {
    const loadTopTracks = async () => {
      try {
        const data = await fetchTopTrack(30);
        setTracks(data);
      } catch (error) {
        console.error("Failed to load top tracks", error);
      }
    };

    loadTopTracks();
  }, []);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <SearchAndBackHeader title="Top Tracks" />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MusicShowcase
            imgUrl={item.imgUrl}
            singerName={item.singerName}
            alignItems="center"
            // onPress={() => handlePlayAlbum(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: { paddingHorizontal: 10 },
  row: { justifyContent: "space-around" },
});
