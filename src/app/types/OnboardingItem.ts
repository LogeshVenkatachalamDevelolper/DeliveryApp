import { ImageSourcePropType } from 'react-native';

export type OnboardingItem = {
  id: string;
  title: string;
  content: string;
  logo: ImageSourcePropType;
};
