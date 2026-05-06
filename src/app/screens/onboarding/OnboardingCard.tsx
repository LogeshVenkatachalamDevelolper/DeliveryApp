import { OnboardingItem } from '@/app/types';
import { useSafeAreaHook } from '@/shared/hooks';
import { GLOBAL_STYLES, LAYOUT, SPACING, TYPOGRAPHY } from '@/styles';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const OnboardingCard = React.memo(
  ({ item }: { item: OnboardingItem }) => {
    const { width } = useWindowDimensions();
    const { right, left } = useSafeAreaHook();
    return (
      <View
        style={[
          {
            width: width - (right + left),
          },
          LAYOUT.center,
        ]}
      >
        <Image source={item.logo} style={styles.image} resizeMode="contain" />
        <View style={{ rowGap: SPACING.md, paddingHorizontal: SPACING.xl }}>
          <Text style={[GLOBAL_STYLES.textCenter, TYPOGRAPHY.h3]}>
            {item.title}
          </Text>
          <Text style={[GLOBAL_STYLES.textCenter, TYPOGRAPHY.body]}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  image: { width: 250, height: 250 },
});
