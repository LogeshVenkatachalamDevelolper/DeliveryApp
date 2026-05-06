import { LAYOUT } from '@/styles';
import React from 'react';
import { View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { Dot } from '.';

interface Props {
  size: number;
  scrollX: SharedValue<number>;
}

const PaginationContainer = ({ size, scrollX }: Props) => {
  return (
    <View
      style={[
        LAYOUT.row,
        LAYOUT.justifyCenter,
        // { backgroundColor: 'red' }
      ]}
    >
      {/* <Text>Test</Text> */}
      {Array.from({ length: size }).map((_, index) => (
        <Dot key={index} index={index} scrollX={scrollX} />
      ))}
    </View>
  );
};

export default PaginationContainer;
