import {
  spaceBottomWithSafeArea,
  spaceLeftWithSafeArea,
  spaceRightWithSafeArea,
  spaceTopWithSafeArea,
} from '@/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSafeAreaHook = () => {
  const insets = useSafeAreaInsets();

  return {
    top: spaceTopWithSafeArea(insets.top),
    bottom: spaceBottomWithSafeArea(insets.bottom),
    left: spaceLeftWithSafeArea(insets.left),
    right: spaceRightWithSafeArea(insets.right),
  };
};
