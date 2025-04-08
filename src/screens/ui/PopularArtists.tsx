import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import { FlatList, StyleSheet } from "react-native";
import MusicShowcase from "../../components/MusicShowcase";
import { usePopularArtist } from "../../store/artistStore";
import { fetchingPopularArtist } from "../../api/artist.api";

export default function PopularArtists() {
  const { moreArtist , setQueryArtist} = usePopularArtist();
  useEffect(() => {
    // also can send parameter query and limit
    const loadPopularArtist = async () => {
      try {
        const PopularArtist = await fetchingPopularArtist("genre:indian",30);
        setQueryArtist(PopularArtist);
      } catch (error) {
        console.error("Error While fetching Popular artist : ", error);
      }
    };
    loadPopularArtist();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <SearchAndBackHeader title="Popular Artists" />
      <FlatList
        data={moreArtist}
        keyExtractor={(artist) => artist.id}
        renderItem={({ item }) => {
          return (
            <MusicShowcase
              imgUrl={item.imageUrl}
              singerName={item.name}
              // songName={item.}
              borderRadius={100}
              alignItems="center"
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: "space-around",
  },
});
