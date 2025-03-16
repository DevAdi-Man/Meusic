import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "../styles/font";
import { theme } from "../styles/theme";
import { wp } from "../helper/common";
import { useNavigation } from "@react-navigation/native";
interface SearchBarProps {
  placeHolder?: string;
  size?: number;
}
const SearchBar: React.FC<SearchBarProps> = ({ placeHolder, size = 30 }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.SearchButton}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <Ionicons name="search" size={size} style={styles.icons} />
        <Text style={styles.title}>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    paddingHorizontal: 15,
    marginTop: 4,
    // flexDirection: "row",
  },
  SearchButton: {
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
    flexDirection: "row",
    paddingVertical: 7,
    alignItems: "center",
    gap: 10,
    backgroundColor: theme.colors.grayBg,
    borderColor: theme.colors.neutral(0.5),
  },
  icons: {
    fontFamily: fonts.Medium,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.neutral(0.7),
    paddingLeft: 12,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: wp(4.5),
    color: theme.colors.neutral(0.7),
  },
});

export default SearchBar;
