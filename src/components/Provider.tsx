import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PlayerProvider } from "./PlayerContext";
// adjust path as needed

/** App Provider */
export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SafeAreaProvider>
      <PlayerProvider>
        {children}
      </PlayerProvider>
    </SafeAreaProvider>
  );
};

