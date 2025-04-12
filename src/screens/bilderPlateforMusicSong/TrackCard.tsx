import React from "react";
import { Pressable, Image, Text, View, StyleSheet } from "react-native";

export const TrackCard = ({ track, onPress }) => (
  <Pressable style={styles.card} onPress={onPress}>
    <Image source={{ uri: track.imgUrl }} style={styles.image} />
    <Text style={styles.title}>{track.songName}</Text>
    <Text style={styles.artist}>{track.singerName}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: "center",
    width: 150,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontWeight: "bold",
  },
  artist: {
    color: "gray",
    fontSize: 12,
  },
});
