// screens/TopTrack.tsx
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import MusicShowcase from "../../components/MusicShowcase";
import { useTrack } from "../../store/useTrackStore";
import { fetchTopTrack } from "../../api/topTracks.api";
import useAudioStore from "../../store/usePlayerStore";

export default function TopTrack() {
  const { tracks, setTracks } = useTrack();
  const { setCurrentTrack, loadAudio, playSound } = useAudioStore();

  useEffect(() => {
    const loadTopTracks = async () => {
      try {
        const data = await fetchTopTrack(4);
        setTracks(data);
      } catch (error) {
        console.log("Failed to load top tracks", error);
        throw error;
      }
    };
    loadTopTracks();
  }, []);

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
      <SearchAndBackHeader title="Top Tracks" />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MusicShowcase
            imgUrl={item.imgUrl}
            singerName={item.singerName}
            alignItems="center"
            onPress={() => {
              console.log("Pressed track:", item.songName);
              handlePlayTrack(item);
            }}
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
