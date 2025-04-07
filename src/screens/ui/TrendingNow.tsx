// import { View, Text } from 'react-native'
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAndBackHeader from "../../components/SearchAndBackHeader";
import { FlatList, StyleSheet } from "react-native";
import { data } from "../../utils/data";
import MusicShowcase from "../../components/MusicShowcase";
import { useTrendingStore } from "../../store/useMusicStore";

export default function TrendingNow() {
  const {trending} = useTrendingStore();
  return (
    <SafeAreaView style={styles.container}>
      <SearchAndBackHeader title="Trending Now" />
      <FlatList
        data={trending}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // console.log('item--> ',item.song)
          return (
            <MusicShowcase
              imgUrl={item.imgUrl}
              singerName={item.singerName}
              songName={item.songName}
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
