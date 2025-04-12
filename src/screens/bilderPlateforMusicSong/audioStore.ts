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
  initializeAudio: () => Promise<void>;
  setCurrentTrack: (track: Track) => void;
  loadAudio: (uri: string) => Promise<void>;
  playSound: () => Promise<void>;
  pauseSound: () => Promise<void>;
  unloadSound: () => Promise<void>;
}

const initializeAudioMode = async () => {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: 1,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: 1,
    playThroughEarpieceAndroid: false,
  });
};

export const useAudioStore = create<AudioState>((set, get) => ({
  sound: null,
  isPlaying: false,
  playbackStatus: null,
  currentTrack: null,

  initializeAudio: async () => await initializeAudioMode(),

  setCurrentTrack: (track) => set({ currentTrack: track }),

  loadAudio: async (uri) => {
    const currentSound = get().sound;
    if (currentSound) await currentSound.unloadAsync();

    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false },
        (status) => status.isLoaded && set({ playbackStatus: status })
      );
      set({ sound });
    } catch (e) {
      console.error("Failed to load audio:", e);
    }
  },

  playSound: async () => {
    const sound = get().sound;
    if (sound) {
      await sound.playAsync();
      set({ isPlaying: true });
    }
  },

  pauseSound: async () => {
    const sound = get().sound;
    if (sound) {
      await sound.pauseAsync();
      set({ isPlaying: false });
    }
  },

  unloadSound: async () => {
    const sound = get().sound;
    if (sound) {
      await sound.unloadAsync();
      set({ sound: null, isPlaying: false, playbackStatus: null });
    }
  },
}));
