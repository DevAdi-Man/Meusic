import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helper/common";
import Avatar from "../../components/AvatarBatch";
import { fonts } from "../../styles/font";
import { theme } from "../../styles/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Card from "../../components/Card";
import { useCategory } from "../../store/useCategoryStore";
import { fetchBrowseCategories } from "../../api/browseCategories.api";
const getRandomColor = () => {
  const colors = [
    "#FFB6C1",
    "#FFD700",
    "#98FB98",
    "#87CEFA",
    "#FF69B4",
    "#FFA07A",
    "#9370DB",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
export default function ExploreScreen() {
  const { categories, setCategories } = useCategory();
  useEffect(() => {
    const fetchBrowser = async () => {
      try {
        const data = await fetchBrowseCategories(46);
        setCategories(data);
      } catch (error) {
        throw error;
      }
    };

    fetchBrowser();
  }, []);

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <View style={styles.container}>
        {/* Explore Header */}
        <View style={styles.headerSection}>
          <Avatar
            name="Explore"
            imageUrl={require("../../../assets/icon.png")}
          />
          <Text style={styles.headingTitle}>Explore</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color="black"
            style={[styles.headerIcons]}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <SearchBar placeHolder="Search..." />

      {/* Browse All */}
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Browse All</Text>

        {/* FlatList */}
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              imgUrl={item.icons[0]?.url}
              backgroundColor={getRandomColor()}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled" // ✅ Fix scrolling issue caused by touchable components
          contentContainerStyle={styles.flatlistContent}
          style={{ flex: 1 }} // ✅ Ensure FlatList takes full space
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1, // ✅ Ensures full screen usage
  },
  container: {
    marginHorizontal: 7,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerSection: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingLeft: 15,
  },
  headingTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: hp(3),
    fontWeight: theme.fontWeight.semiBold,
  },
  headerIcons: {
    color: theme.colors.neutral(0.7),
    fontSize: 40,
    fontWeight: theme.fontWeight.medium,
    paddingRight: 15,
  },
  mainContainer: {
    flex: 1, // ✅ Ensure FlatList gets space
    marginTop: 15,
    padding: 12,
  },
  mainTitle: {
    fontFamily: fonts.Regular,
    fontSize: hp(2.3),
  },
  flatlistContent: {
    flexGrow: 1, // ✅ Allows scrolling when items don't fill full height
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 45,
  },
});
