import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import { theme } from '../theme';
const { width, height } = Dimensions.get('window');
const Loading = () => {
  return (
    <View
      style={{
        height,
        width,
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.background}
      />
    </View>
  );
};

export default Loading;
