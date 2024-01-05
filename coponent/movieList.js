import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../theme';

const MovieList = ({ title, data }) => {
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
    </View>
  );
};

export default MovieList;
