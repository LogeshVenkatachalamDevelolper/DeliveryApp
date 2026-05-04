import { OnboardingItem } from '@/app/types';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnboardingCard } from './OnboardingCard';

interface Props {
  data: OnboardingItem[];
}

export const OnboardingPresentation = (props: Props) => {
  const insets = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item }: { item: OnboardingItem }) => <OnboardingCard item={item} />,
    [],
  );

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        justifyContent: 'space-between',
      }}
    >
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text>1/3</Text>
        <Text>Skip</Text>
      </View>
      <FlashList
        data={props.data}
        style={{ flex: 1 }}
        pagingEnabled
        keyExtractor={useCallback((item: OnboardingItem) => {
          return item.id;
        }, [])}
        horizontal
        renderItem={renderItem}
      />
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text>Prev</Text>
        <View style={{ width: 50, height: 4 }}></View>
        <Text>Next</Text>
      </View>
    </View>
  );
};
