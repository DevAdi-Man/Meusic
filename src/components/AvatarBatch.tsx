import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl, size = 50 }) => {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
      ) : (
        <Text style={[styles.initial, { fontSize: size / 2.5 }]}>{name.charAt(0).toUpperCase()}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db", // Default background color
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  initial: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Avatar;
