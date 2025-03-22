import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet } from "react-native";
// Screen Imports Starts ---------------->
import HomeScreen from "../screens/ui/HomeScreen";
import ExploreScreen from "../screens/ui/ExploreScreen";
import LibraryScreen from "../screens/ui/LibraryScreen";
import ProfileScreen from "../screens/ui/ProfileScreen";

// Imports End here ---------------------->

//icons Imports Starts ------------------->
// import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Imports End here ---------------------->

const bottomTab = createBottomTabNavigator();

//Icons defined here
const HomeIcons = ({ color, size }: { color: string; size: number }) => {
  return <FontAwesome name="home" size={size*1.2} color={color} />;
};

const ExploreIcons = ({ color, size }: { color: string; size: number }) => {
  return <MaterialIcons name="explore" size={size *1.2} color={color} />;
};
const LibraryIcons = ({ color, size }: { color: string; size: number }) => {
  return <MaterialIcons name="library-music" size={size*1.2} color={color} />;
};

const ProfileIcons = ({ color, size }: { color: string; size: number }) => {
  return <FontAwesome5 name="user" size={size*1.2} color={color} />;
};
// Icons Defined End here ---------------------->
export default function AppStack() {
  const insets = useSafeAreaInsets();

  
  
  return (
    <bottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // hide labels for clear UI
        tabBarStyle: [styles.tabBar,{paddingBottom: insets.bottom*2.2 || 10}],
        tabBarActiveTintColor: theme.colors.green, // Active icon color
        tabBarInactiveTintColor: "gray", // Inactive icon color
        tabBarItemStyle:{
          paddingTop:8
        },
        animation:'shift'
      }}
    >
      <bottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: HomeIcons }}
      />
      <bottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ tabBarIcon: ExploreIcons }}
      />
      <bottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{ tabBarIcon: LibraryIcons }}
      />
      <bottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ProfileIcons }}
      />
    </bottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.white, // Makes background transparent
    position: "absolute", // Ensures transparency works properly
    elevation: 5, // Removes shadow on Android
    borderTopWidth: 0, // Removes border line on iOS
    left: 20,
    right: 20,
    height: 55,
    borderTopLeftRadius: 30, // Rounded edges for floating effect
    borderTopRightRadius:30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    // paddingBottom: Platform.OS === "ios" ? 30 : 10,
    alignItems:'center',
    justifyContent:'center',
  },
});
