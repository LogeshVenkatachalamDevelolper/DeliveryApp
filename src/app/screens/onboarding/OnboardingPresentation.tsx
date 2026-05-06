import { OnboardingItem } from '@/app/types';
import { useSafeAreaHook } from '@/shared/hooks';
import { GLOBAL_STYLES, LAYOUT } from '@/styles';
import { AnimatedFlashList } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { OnboardingCard } from './OnboardingCard';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import PaginationContainer from '@/shared/components/pagination/PaginationContainer';

interface Props {
  data: OnboardingItem[];
}

export const OnboardingPresentation = (props: Props) => {
  const { top, bottom, right, left } = useSafeAreaHook();
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({ item }: { item: OnboardingItem }) => <OnboardingCard item={item} />,
    [],
  );

  return (
    <View
      style={[
        GLOBAL_STYLES.container,
        {
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        },
        LAYOUT.spaceBetween,
      ]}
    >
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text>1/3</Text>
        <Text>Skip</Text>
      </View>
      <AnimatedFlashList
        data={props.data}
        style={{ flex: 1 }}
        keyExtractor={useCallback((item: OnboardingItem) => {
          return item.id;
        }, [])}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={renderItem}
        // onScroll={onScroll}
        scrollEventThrottle={16}
      />
      {/* <PaginationContainer size={props.data.length} scrollX={scrollX} /> */}
      <View style={[LAYOUT.spaceBetween, LAYOUT.row]}>
        <Text>Prev</Text>
        <View style={{ width: 50, height: 4 }}></View>
        <Text>Next</Text>
      </View>
    </View>
  );
};
