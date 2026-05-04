import { OnboardingItem } from '@/app/types';
import React from 'react';
import { OnboardingPresentation } from './OnboardingPresentation';

export const OnboardingContainer = () => {
  const data: OnboardingItem[] = [
    { id: 'data-1', data: '1' },
    { id: 'data-2', data: '2' },
    { id: 'data-3', data: '3' },
  ];
  return <OnboardingPresentation data={data} />;
};
