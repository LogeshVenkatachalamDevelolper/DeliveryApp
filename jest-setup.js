import * as ReactNative from 'react-native';
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