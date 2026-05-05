import * as ReactNative from 'react-native';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
// import * as Reanimated from "react-native-reanimated"
// require('react-native-worklets').setUpTests();
// require('react-native-reanimated').setUpTests();
// Reanimated.setUpTests();
/**
 * Global Jest setup — runs after the Jest framework is installed,
 * before every test file. Add project-wide mocks here.
 */

jest.spyOn(ReactNative, 'useWindowDimensions').mockReturnValue({
  width: 375,
  height: 812,
  scale: 1,
  fontScale: 1,
});

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// jest.mock('react-native-worklets', () =>
//   require('react-native-worklets/src/mock')
// );

// jest.mock('react-native-reanimated', () =>
//   require('react-native-reanimated/src/mock')
// );
