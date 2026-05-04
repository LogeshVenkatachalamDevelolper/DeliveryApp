// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text } from 'react-native';

// const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const AppStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppStack;

// App.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { LazyExoticComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';
import HomeScreen from './lazyLoadingTest/HomeScreen';
// import SettingsScreen from './lazyLoadingTest/SettingsScreen';
import ReportsScreen from './lazyLoadingTest/ReportScreen';

// ✅ Lazy load each screen
// const HomeScreen = React.lazy(() => import('./lazyLoadingTest/HomeScreen'));
const SettingsScreen = React.lazy(
  () => import('./lazyLoadingTest/SettingsScreen'),
);
// const ReportsScreen = React.lazy(
//   () => import('./lazyLoadingTest/ReportScreen'),
// );

// Tab navigator type definition
type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  Reports: undefined;
};

// Fallback loader component
const LazyLoader: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#6200EE" />
  </View>
);

// Wrapper to apply Suspense on each lazy screen
const withSuspense = (Component: LazyExoticComponent<React.FC>) => () =>
  (
    <React.Suspense fallback={<LazyLoader />}>
      <Component />
    </React.Suspense>
  );

const Stack = createNativeStackNavigator();

// Stack navigator is lazy by default — no extra config needed
// Each screen loads only when you navigate to it
const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Home" component={withSuspense(HomeScreen)} />
     */}
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    <Stack.Screen name="Settings" component={withSuspense(SettingsScreen)} />
    {/* <Stack.Screen name="Reports" component={withSuspense(ReportsScreen)} /> */}
    <Stack.Screen name="Reports" component={ReportsScreen} />
  </Stack.Navigator>
);

export default AppStack;
