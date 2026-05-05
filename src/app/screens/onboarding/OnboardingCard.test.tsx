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
  test('Title And Content Visible', async () => {
    render(
      <SafeAreaProvider>
        <OnboardingCard item={mockItem} />
      </SafeAreaProvider>,
    );
    expect(await screen.findByText(mockItem.title)).toBeOnTheScreen();
    expect(await screen.findByText(mockItem.content)).toBeOnTheScreen();
  });
});
