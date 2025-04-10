import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import { FlatList, StyleSheet } from "react-native";
import MusicShowcase from "../../components/MusicShowcase";
import { useAlbumStore } from "../../store/useAlbum";

export default function TopCharts() {
  const {albums}= useAlbumStore();
  return (
    <SafeAreaView style={styles.container}>
      <SearchAndBackHeader title="Top Charts" />
      <FlatList
        data={albums}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <MusicShowcase
              imgUrl={item.images?.[0]?.url }
              singerName={item.name}
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
