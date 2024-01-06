import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from '../theme';

var { width, height } = Dimensions.get('window');

const MovieList = ({ title, data }) => {
  let movieName = 'Kung Fu Panda 4';
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 8, paddingVertical: 4 }}>
      <View
        style={{
          marginHorizontal: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
        <TouchableOpacity>
          <Text style={[styles.text, { fontSize: 18 }]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', item)}
            >
              <View
                style={{
                  flexDirection: 'column',
                  marginRight: 16,
                  marginTop: 8,
                }}
              >
                <Image
                  source={require('../assets/images/movie2.png')}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 16,
                  }}
                />
                <Text style={{ color: 'white', marginLeft: 8 }}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + '...'
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
