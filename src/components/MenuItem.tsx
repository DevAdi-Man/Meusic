import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { wp } from "../helper/common";
import { theme } from "../styles/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { fonts } from "../styles/font";
interface MenuItemProps {
  title: string;
  icons: string;
  iconLibrary?:
    | "MaterialIcons"
    | "FontAwesome"
    | "Ionicons"
    | "MaterialCommunityIcons"
    | "Feather";
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icons,
  onPress,
  iconLibrary = "MaterialIcons",
}) => {
  const IconComponent =
    iconLibrary === "MaterialIcons"
      ? MaterialIcons
      : iconLibrary === "FontAwesome"
      ? FontAwesome
      : iconLibrary === "Ionicons"
      ? Ionicons
      : iconLibrary === "MaterialCommunityIcons"
      ? MaterialCommunityIcons
      : Feather;
      // : iconLibrary === "Feather";
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <IconComponent
          name={icons as any}
          color="white"
          style={{
            marginRight: 8,
            color: theme.colors.green,
            fontSize: wp(6.3),
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <AntDesign name="right" style={{ fontSize: wp(6) }} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    // borderWidth:2
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    // borderWidth:2
  },
  title: {
    fontSize: wp(5.5),
    color: theme.colors.black,
    fontFamily: fonts.Regular,
    fontWeight: theme.fontWeight.semiBold,
  },
});

export default MenuItem;
