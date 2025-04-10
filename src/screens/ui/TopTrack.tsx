import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import { FlatList, StyleSheet } from "react-native";
import MusicShowcase from "../../components/MusicShowcase";
import { useTrack } from "../../store/useTrackStore";
import { fetchTopTrack } from "../../api/topTracks.api";

export default function TopTrack() {
  const { tracks, setTracks } = useTrack();

  useEffect(() => {
    const loadTopTracks = async () => {
      try {
        const data = await fetchTopTrack(30); // 30 tracks here
        setTracks(data);
      } catch (error) {
        console.error("Failed to load top tracks", error);
      }
    };

    loadTopTracks();
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
