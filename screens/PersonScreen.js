import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../coponent/movieList';
import Loading from '../coponent/loading';
var { width, height } = Dimensions.get('window');
const ios = Platform.ios == 'ios';

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#333' }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <SafeAreaView
        style={{
          zIndex: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginVertical: 35,
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
          <HeartIcon size={35} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              shadowColor: 'gray',
              shadowRadius: 40,
              shadowOpacity: 1,
              shadowOffset: { width: 0, height: 5 },
              elevation: 80,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                borderRadius: 122,
                overflow: 'hidden',
                height: 250,
                width: 250,
                borderWidth: 2,
                borderColor: 'gray',
              }}
            >
              <Image
                source={require('../assets/images/cast.png')}
                style={{ height: height * 0.43, width: width * 0.74 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              Jakie chan
            </Text>
            <Text
              style={{
                color: '#6B7280',
                alignSelf: 'center',
                fontSize: 15,
              }}
            >
              Victoria Peak, Hong Kong
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 20,
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#696969',
              borderRadius: 38,
            }}
          >
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: '#888',
                paddingRight: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Gender</Text>
              <Text style={{ color: '#888', fontSize: 12 }}>Male</Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: '#888',
                paddingRight: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Birthday
              </Text>
              <Text style={{ color: '#888', fontSize: 12 }}>April 7, 1954</Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: '#888',
                paddingRight: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Known For
              </Text>
              <Text style={{ color: '#888', fontSize: 12 }}>Acting</Text>
            </View>
            <View
              style={{
                // borderRightWidth: 2,
                borderRightColor: '#888',
                paddingRight: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Popolarity
              </Text>
              <Text style={{ color: '#888', fontSize: 12 }}>89.3</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 18, marginVertical: 12 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Biography</Text>
            <Text style={{ color: '#888', letterSpacing: 2 }}>
              Jackie Chan SBS MBE PMW[4] (Chinese: 成龍, Yale romanization:
              Sìhng Lùhng, Jyutping: Sing4 Lung4; lit. "becoming the
              dragon";[5][3][2] born 7 April 1954) is a Hong Kong[6][7] actor,
              filmmaker, martial artist, and stuntman known for his slapstick
              acrobatic fighting style, comic timing, and innovative stunts,
              which he typically performs himself. Before entering the film
              industry, he was one of the Seven Little Fortunes from the China
              Drama Academy at the Peking Opera School, where he studied
              acrobatics, martial arts, and acting. Chan has been acting since
              the 1960s, performing in more than 150 films. He is one of the
              most influential action film stars of all time.[8] Chan is one of
              the most recognisable and influential film personalities in the
              world, with a widespread global following in both the Eastern and
              Western hemispheres. He has received fame stars on the Hong Kong
              Avenue of Stars and the Hollywood Walk of Fame.[9][10] Chan has
              been referenced in various pop songs, cartoons, films, and video
              games. He is an operatically trained vocalist and is also a
              Cantopop and Mandopop star, having released a number of music
              albums and sung many of the theme songs for the films in which he
              has starred. He is also a globally known philanthropist and has
              been named one of the top 10 most charitable celebrities by Forbes
              magazine.[11][12] In 2004, film scholar Andrew Willis stated that
              Chan was perhaps the "most recognised film star in the world."[13]
              In 2015, Forbes estimated his net worth to be $350 million, and as
              of 2016, he was the second-highest-paid actor in the
              world.[14][15]
            </Text>
          </View>
          <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
};

export default PersonScreen;
