import { View, Text } from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('window');
const Loading = () => {
  return (
    <View style={{ height, width }}>
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
