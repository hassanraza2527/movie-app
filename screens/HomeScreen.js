import { View, Text, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme';
import TrendingMovies from '../coponent/trendingMovies';
import MovieList from '../coponent/movieList';
import { useNavigation } from '@react-navigation/native';

const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <SafeAreaView style={{ marginBottom: ios ? 2 : 3 }}>
        <StatusBar style='light' />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 8,
          }}
        >
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white' />
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color='white' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* {trending movies} */}
        <TrendingMovies data={trending}></TrendingMovies>
        <MovieList title='Upcoming' data={upcoming} />
        <MovieList title='Top Rated' data={topRated} />
      </ScrollView>
    </View>
  );
}
