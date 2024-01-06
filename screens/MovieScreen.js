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

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const marginTop = ios ? '' : 'mt-3';

const MovieScreen = () => {
  const { prams: item } = useRoute();
  let movieName = 'Kung Fu Panda 4';
  const navigation = useNavigation();
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
      <View style={{ width: '100%', flex: 1 }}>
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
                borderRadius: 15,
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
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
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
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
