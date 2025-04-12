import React, { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useAudioStore } from "../store/audioStore";
import { TrackCard } from "../components/TrackCard";
import fallbackAudio from "../../assets/RehleMereKolSimranChoudhary.mp3";

const mockTracks = [
  {
    id: "1",
    songName: "Sample Song",
    singerName: "Artist",
    imgUrl: "https://via.placeholder.com/150",
    audioUrl: "", // empty to test fallback
  },
];

export default function AudioPlayerScreen() {
  const { setCurrentTrack, loadAudio, playSound, initializeAudio } = useAudioStore();

  useEffect(() => {
    initializeAudio();
  }, []);

  const handlePlay = async (track) => {
    const uri =
      typeof track.audioUrl === "string" && track.audioUrl.startsWith("http")
        ? track.audioUrl
        : fallbackAudio;

    setCurrentTrack(track);
    await loadAudio(uri);
    await playSound();
  };

  return (
    <SafeAreaView>
      <FlatList
        data={mockTracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TrackCard track={item} onPress={() => handlePlay(item)} />
        )}
      />
    </SafeAreaView>
  );
}
