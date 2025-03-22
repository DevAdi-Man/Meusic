import { create } from "zustand";
import { AuthState } from "../utils/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: async (token: string | null) => {
        if (token === null) {
          await AsyncStorage.removeItem("auth-token"); 
        } else {
          await AsyncStorage.setItem("auth-token", token);
        }
        set({ token });
      },
      clearToken: async () => {
        await AsyncStorage.removeItem("auth-token");
        set({ token: null });
      },
    }),
    {
      name: "auth-storage", // AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
