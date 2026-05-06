import { OnboardingContainer } from '@/app/screens/onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingContainer} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
};

export default LoginStack;
