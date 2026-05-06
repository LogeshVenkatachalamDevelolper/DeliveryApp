import Animated, {
  interpolate,
  Extrapolation,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
interface Props {
  index: number;
  scrollX: SharedValue<number>;
}

export const Dot = ({ index, scrollX }: Props) => {
  const style = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            inputRange,
            [0.7, 1.2, 0.7],
            Extrapolation.CLAMP,
          ),
        },
      ],
      opacity: interpolate(
        scrollX.value,
        inputRange,
        [0.4, 1, 0.4],
        Extrapolation.CLAMP,
      ),
    };
  });

  return <Animated.View style={[styles.dot, style]} />;
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#111827',
    marginHorizontal: 4,
  },
});
