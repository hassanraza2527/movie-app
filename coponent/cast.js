import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Cast = ({ cast, navigation }) => {
  let personName = 'Jakie Chan';
  let characterName = 'PO';
  return (
    <View style={{ marginVertical: 12 }}>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          marginHorizontal: 15,
          marginBottom: 20,
        }}
      >
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginRight: 20, alignItems: 'center' }}
                onPress={() => navigation.navigate('Person', person)}
              >
                <View
                  style={{
                    overflow: 'hidden',
                    borderRadius: 48,
                    height: 100,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: '#A1A1A1',
                  }}
                >
                  <Image
                    source={require('../assets/images/cast.png')}
                    style={{
                      borderRadius: 16, // Example rounded-2xl equivalent
                      height: 100, // Example height for h-24
                      width: 100,
                    }}
                  />
                </View>

                <Text style={{ color: 'white', marginTop: 10, fontSize: 12 }}>
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + '...'
                    : characterName}
                </Text>
                <Text style={{ color: '#A1A1A1', marginTop: 10, fontSize: 12 }}>
                  {personName.length > 10
                    ? personName.slice(0, 10) + '...'
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
