// store/usePlayerStore.ts
import { create } from "zustand";
import { Audio, AVPlaybackStatus } from "expo-av";

interface Track {
  id: string;
  songName: string;
  singerName: string;
  imgUrl: string;
  audioUrl: string;
}

interface AudioState {
  sound: Audio.Sound | null;
  isPlaying: boolean;
  playbackStatus: AVPlaybackStatus | null;
  currentTrack: Track | null;
  loadAudio: (uri: string) => Promise<void>;
  playSound: () => Promise<void>;
  pauseSound: () => Promise<void>;
  unloadSound: () => Promise<void>;
  setCurrentTrack: (track: Track) => void;
  initializeAudio: () => Promise<void>;
}

const initializeAudioMode = async () => {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: 1,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: 1,
      playThroughEarpieceAndroid: false,
    });
  } catch (error) {
    console.error("Failed to set audio mode:", error);
  }
};

const useAudioStore = create<AudioState>((set, get) => ({
  sound: null,
  isPlaying: false,
  playbackStatus: null,
  currentTrack: null,

  initializeAudio: async () => {
    await initializeAudioMode();
  },

  setCurrentTrack: (track) => set({ currentTrack: track }),

  loadAudio: async (uri: string) => {
    const currentSound = get().sound;
    if (currentSound) await currentSound.unloadAsync();

    try {
      // const isRemote = uri.startsWith("http");
      let source;

      if (uri === "fallback") {
        source = require("../../assets/RehleMereKolSimranChoudhary.mp3");
      } else if (uri.startsWith("http")) {
        source = { uri };
      } else {
        throw new Error("Invalid audio URI");
      }

      const { sound } = await Audio.Sound.createAsync(
        source,
        { shouldPlay: false },
        (status) => {
          if (status.isLoaded) {
            set({ playbackStatus: status });
          }
        }
      );
      set({ sound });
    } catch (error) {
      console.error("Failed to load audio", error);
    }
  },

  playSound: async () => {
    const currentSound = get().sound;
    if (currentSound) {
      await currentSound.playAsync();
      set({ isPlaying: true });
    }
  },

  pauseSound: async () => {
    const currentSound = get().sound;
    if (currentSound) {
      await currentSound.pauseAsync();
      set({ isPlaying: false });
    }
  },

  unloadSound: async () => {
    const currentSound = get().sound;
    if (currentSound) {
      await currentSound.unloadAsync();
      set({ sound: null, isPlaying: false, playbackStatus: null });
    }
  },
}));

export default useAudioStore;
