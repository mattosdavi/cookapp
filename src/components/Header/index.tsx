import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'
import { useEffect } from 'react';

export function Header() {
  const opacity = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }))

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 2000}) ;
  })

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.title}>
          Oriental Food
        </Text>

        <Text style={styles.subtitle}>
          Special Sushi
        </Text>
      </View>
    </Animated.View>
  );
}