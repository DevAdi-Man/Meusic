// screens/SearchScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { debounce, flatMap } from 'lodash';
import { useSearchStore } from '../../store/searchStore';
import { useAuthStore } from '../../store/authStore';
import { searchTracks } from '../../api/search.api';
import { theme } from '../../styles/theme';

const SearchScreen = () => {
  const {
    query,
    results,
    loading,
    recentSearches,
    setQuery,
    setResults,
    setLoading,
    setError,
    clearResults,
    addRecentSearch,
  } = useSearchStore();

  const { accessToken } = useAuthStore();
  const [localQuery, setLocalQuery] = useState(query);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSearch = debounce(async (text: string) => {
    if (!text || !accessToken) {
      clearResults();
      return;
    }

    setLoading(true);
    try {
      const tracks = await searchTracks(accessToken, text);
      setResults(tracks);
      if (tracks.length > 0) addRecentSearch(tracks[0]);
    } catch {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  }, 400);

  useEffect(() => {
    handleSearch(localQuery);
  }, [localQuery]);

  const handleRecentPress = (track: any) => {
    setLocalQuery(track.name);
    setQuery(track.name);
    handleSearch(track.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search songs..."
        value={localQuery}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        onChangeText={(text) => {
          setLocalQuery(text);
          setQuery(text);
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#1DB954" />
      ) : localQuery.length === 0 && inputFocused ? (
        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRecentPress(item)}>
              <View style={styles.item}>
                <Image source={{ uri: item.imageUrl }} style={styles.img} />
                <View>
                  <Text style={styles.song}>{item.name}</Text>
                  <Text style={styles.artist}>{item.artist}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListHeaderComponent={<Text style={styles.header}>Recent Searches</Text>}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.imageUrl }} style={styles.img} />
              <View>
                <Text style={styles.song}>{item.name}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            localQuery.length > 0 && !loading ? (
              <Text style={styles.noResult}>No results found</Text>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.grayBg,
    fontSize: 16,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  song: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#666',
  },
  noResult: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});