import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../coponent/cast';
import MovieList from '../coponent/movieList';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const marginTop = ios ? '' : 'mt-3';

const MovieScreen = () => {
  const { prams: item } = useRoute();
  let movieName = 'Kung Fu Panda 4';
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [isFavorite, toggleFavorite] = useState(false);
  useEffect(() => {}, item);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
        backgroundColor: '#333',
      }}
    >
      <View style={{ width: '100%' }}>
        <SafeAreaView
          style={{
            position: 'absolute',
            zIndex: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            width: '100%',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.background,
              {
                backgroundColor: '#eab308',
                borderRadius: 18,
                padding: 4,
              },
            ]}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon
              size={35}
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../assets/images/movie2.png')}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.9)', 'rgba(23,23,23,1)']}
            style={{
              width,
              height: height * 0.4,
              position: 'absolute',
              bottom: 0,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>
      <View style={{ marginTop: -(height * 0.09), paddingVertical: 16 }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          {movieName}
        </Text>
        <Text
          style={{
            color: '#6B7280',
            fontWeight: '600',
            fontSize: 16,
            textAlign: 'center',
          }}
        >
          Released . 2024 . 150 min
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 20,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              color: '#A1A1A1',
              fontWeight: '600',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Action .
          </Text>

          <Text
            style={{
              color: '#A1A1A1',
              fontWeight: '600',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Thrill .
          </Text>

          <Text
            style={{
              color: '#A1A1A1',
              fontWeight: '600',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Comedy
          </Text>
        </View>
        <Text
          style={{
            color: '#A1A1A1',
            marginHorizontal: 20,
            letterSpacing: 1,
          }}
        >
          Po must train a new warrior when he's chosen to become the spiritual
          leader of the Valley of Peace. However, when a powerful shape-shifting
          sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes
          he's going to need some help. Teaming up with a quick-witted corsac
          fox, Po soon discovers that heroes can be found in the most unexpected
          places.
        </Text>
      </View>
      <Cast cast={cast} navigation={navigation} />
      <MovieList
        title={'Similar Movies'}
        data={similarMovies}
        hideSeeAll={true}
      />
    </ScrollView>
  );
};

export default MovieScreen;
