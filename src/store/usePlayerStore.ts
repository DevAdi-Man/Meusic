// store/useAudioStore.ts
import { create } from 'zustand';
import { Audio, AVPlaybackStatus } from 'expo-av';

interface Track {
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
      playThroughEarpieceAndroid: false
    });
    console.log('Audio mode initialized');
  } catch (error) {
    console.error('Failed to set audio mode:', error);
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
  
  setCurrentTrack: (track: Track) => {
    set({ currentTrack: track });
  },
  
  loadAudio: async (uri: string) => {
    try {
      // Unload any existing sound
      const currentSound = get().sound;
      if (currentSound) {
        await currentSound.unloadAsync();
      }
      
      console.log('Loading audio from:', uri);
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false },
        (status) => {
          if (status.isLoaded) {
            set({ playbackStatus: status });
          }
        }
      );
      
      set({ sound });
      const playbackStatus = await sound.getStatusAsync();
      set({ playbackStatus });
      console.log('Audio loaded successfully');
    } catch (error) {
      console.error("Failed to load sound", error);
    }
  },
  
  playSound: async () => {
    try {
      const currentSound = get().sound;
      if (currentSound) {
        console.log('Playing sound');
        await currentSound.playAsync();
        set({ isPlaying: true });
      } else {
        console.warn('No sound loaded to play');
      }
    } catch (error) {
      console.error("Failed to play sound", error);
    }
  },
  
  pauseSound: async () => {
    try {
      const currentSound = get().sound;
      if (currentSound) {
        console.log('Pausing sound');
        await currentSound.pauseAsync();
        set({ isPlaying: false });
      }
    } catch (error) {
      console.error("Failed to pause sound", error);
    }
  },
  
  unloadSound: async () => {
    try {
      const currentSound = get().sound;
      if (currentSound) {
        console.log('Unloading sound');
        await currentSound.unloadAsync();
        set({ sound: null, isPlaying: false, playbackStatus: null });
      }
    } catch (error) {
      console.error("Failed to unload sound", error);
    }
  },
}));

// Initialize audio mode when store is first created
initializeAudioMode();

export default useAudioStore;
