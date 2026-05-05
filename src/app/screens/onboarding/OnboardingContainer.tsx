import { OnboardingItem } from '@/app/types';
import React from 'react';
import { OnboardingPresentation } from './OnboardingPresentation';
import { LogoPath } from '@/assets/images';

export const OnboardingContainer = () => {
  const data: OnboardingItem[] = [
    {
      id: 'data-1',
      title: 'Choose Products',
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      logo: LogoPath.fashionShopRafiki,
    },
    {
      id: 'data-2',
      title: 'Make Payment',
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      logo: LogoPath.salesConsultingPana,
    },
    {
      id: 'data-3',
      title: 'Get Your Order',
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      logo: LogoPath.shoppingBagRafiki,
    },
  ];
  return <OnboardingPresentation data={data} />;
};
