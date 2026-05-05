import { render, screen } from '@testing-library/react-native';
import { OnboardingCard } from './OnboardingCard';
import { OnboardingItem } from '@/app/types';
import { LogoPath } from '@/assets/images';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const mockItem: OnboardingItem = {
  title: 'Welcome',
  content: 'Start using app',
  logo: LogoPath.fashionShopRafiki,
  id: 'test-id-1',
};

describe('Component Test OnboardingCard', () => {
  test('Title And Content Visible',  () => {
    render(
      <SafeAreaProvider 
      initialMetrics={{
      frame: { x: 0, y: 0, width: 375, height: 812 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    }}
    >
        <OnboardingCard item={mockItem} />
      </SafeAreaProvider>,
    );

    expect( screen.getByText(mockItem.title)).toBeOnTheScreen();
    expect( screen.getByText(mockItem.content)).toBeOnTheScreen();
  });
});
