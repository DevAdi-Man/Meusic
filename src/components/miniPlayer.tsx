// components/MiniPlayer.tsx
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../styles/theme";
import { useNavigation } from "@react-navigation/native";
import useAudioStore from "../store/usePlayerStore";
// import { usePlayer } from "../store/usePlayerStore";

export default function MiniPlayer({ audioUri }: { audioUri: string }) {
  const { sound, isPlaying, loadAudio, playSound, pauseSound, playbackStatus, unloadSound } = useAudioStore();
  const navigation = useNavigation();
  useEffect(() => {
    loadAudio(audioUri);
    return () => {
      unloadSound()
    }
  }, [audioUri]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NowPlaying")}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image
        source={{ uri: currentTrack.imgUrl }}
        style={styles.albumArt}
        resizeMode="cover"
      />
      <View style={styles.trackInfo}>
        <Text numberOfLines={1} style={styles.trackName}>
          {currentTrack.songName}
        </Text>
        <Text numberOfLines={1} style={styles.artist}>
          {currentTrack.singerName}
        </Text>
      </View>
      <TouchableOpacity onPress={togglePlayPause}>
        <Ionicons
          name={isPlaying ? "pause" : "play"}
          size={28}
          color={theme.colors.black}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    left: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  trackInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  trackName: {
    fontSize: 16,
    fontWeight: "600",
  },
  artist: {
    fontSize: 12,
    color: "#666",
  },
});
