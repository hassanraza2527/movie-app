import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
var { width, height } = Dimensions.get('window');
const SearchScreen = () => {
  let movieName = 'Kung Fu Panda 4';
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]);
  return (
    <SafeAreaView style={{ backgroundColor: '#333', flex: 1 }}>
      <View
        style={{
          marginTop: 45,
          marginHorizontal: 18,
          marginBottom: 18,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: 'rgba(128, 128, 128, 1)',
          borderWidth: 1,
          borderRadius: 25,
        }}
      >
        <TextInput
          placeholder='Search Movies'
          placeholderTextColor={'lightgray'}
          style={{
            paddingBottom: 6,
            paddingLeft: 16,
            flex: 1,
            fontWeight: '500',
            color: 'white',
            letterSpacing: 2,
            fontSize: 16,
            paddingTop: 6,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            borderRadius: 25,
            padding: 10,
            margin: 3,
            backgroundColor: 'rgba(128, 128, 128, 1)',
          }}
        >
          <XMarkIcon size={25} color={'white'} />
        </TouchableOpacity>
      </View>
      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          style={{ marginBottom: 3 }}
        >
          <Text style={{ color: 'white', fontWeight: '500', marginLeft: 12 }}>
            Results ({results.length})
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate('Movie', item)}
                >
                  <View style={{ marginBottom: 12, marginVertical: 8 }}>
                    <Image
                      source={require('../assets/images/movie2.png')}
                      style={{
                        borderRadius: 20,
                        width: width * 0.44,
                        height: height * 0.3,
                      }}
                    />
                    <Text style={{ color: '#CCCCCC', marginLeft: 6 }}>
                      {movieName.length > 20
                        ? movieName.slice(0, 22) + '...'
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../assets/images/movieTime.png')}
            style={{ height: 500, width: 500 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
