import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import TrendingNow from "../screens/ui/TrendingNow";
import PopularArtists from "../screens/ui/PopularArtists";
import TopCharts from "../screens/ui/TopCharts";
import SearchScreen from "../screens/ui/SearchScreen";
import PlaylistScreen from "../screens/ui/PlaylistScreen";
import DownloadsScreen from "../screens/ui/DownloadsScreen";
import PodcastsScreen from "../screens/ui/PodcastsScreen";
import AlbumsScreen from "../screens/ui/AlbumsScreen";
import SongsScreen from "../screens/ui/SongsScreen";
import ArtistsScreen from "../screens/ui/ArtistsScreen";
import HistorysScreen from "../screens/ui/HistorysScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="bottom" component={AppStack} />
      <Stack.Screen name="TrendingNow" component={TrendingNow} />
      <Stack.Screen name="PopularArtists" component={PopularArtists} />
      <Stack.Screen name="TopCharts" component={TopCharts} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name='Playlists' component={PlaylistScreen} />
      <Stack.Screen name='Downloads' component={DownloadsScreen} />
      <Stack.Screen name='Podcasts' component={PodcastsScreen} />
      <Stack.Screen name='Albums' component={AlbumsScreen} />
      <Stack.Screen name='Songs' component={SongsScreen} />
      <Stack.Screen name='Artists' component={ArtistsScreen} />
      <Stack.Screen name='Historys' component={HistorysScreen}/>
    </Stack.Navigator>
  );
}
