import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { OnboardingItem } from '@/app/types';
import { LogoPath } from '@/assets/images';
import { SPACING } from '@/styles';

export const OnboardingCard = React.memo(
  ({ item }: { item: OnboardingItem }) => {
    const { width } = useWindowDimensions();
    return (
      <View
        style={{
          width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={LogoPath.fashionShopRafiki}
          style={{ width: 250, height: 250 }}
        />
        <View style={{ rowGap: SPACING.lg }}>
          <Text>{item.id}</Text>
          <Text>{item.id}</Text>
        </View>
      </View>
    );
  },
);
