import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import { FlatList, StyleSheet } from "react-native";
import { data } from "../../utils/data";
import MusicShowcase from "../../components/MusicShowcase";

export default function PopularArtists() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchAndBackHeader title="Popular Artists" />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          
          return (
            <MusicShowcase
              imgUrl={item.image}
              singerName={item.song}
              songName={item.singer}
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
