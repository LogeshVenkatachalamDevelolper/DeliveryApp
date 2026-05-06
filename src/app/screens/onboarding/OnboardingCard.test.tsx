import { render, screen } from '@testing-library/react-native';
import { OnboardingCard } from './OnboardingCard';
import { OnboardingItem } from '@/app/types';
import { LogoPath } from '@/assets/images';

const mockItem: OnboardingItem = {
  title: 'Welcome',
  content: 'Start using app',
  logo: LogoPath.fashionShopRafiki,
  id: 'test-id-1',
};

describe('Component Test OnboardingCard', () => {
  test('Title And Content Visible', () => {
    render(<OnboardingCard item={mockItem} />);

    // expect(screen.getByText(mockItem.title)).toBeOnTheScreen();
    expect(screen.getByText('mockItem.title')).toBeOnTheScreen();
    expect(screen.getByText(mockItem.content)).toBeOnTheScreen();
  });
});
