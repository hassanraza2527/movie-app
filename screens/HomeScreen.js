import { View, Text, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme';

const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'neutral-800' }}>
      <SafeAreaView style={{ marginBottom: ios ? -2 : -3 }}>
        <StatusBar style='light' />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 4,
          }}
        >
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color='black' />
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color='black' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
