module.exports = {
  preset: '@react-native/jest-preset',
  collectCoverage: false,
  // resolver: 'react-native-worklets/jest/resolver',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/types/**',
    '!src/**/enums/**',
    '!src/**/modal/**',
  ],
  setupFilesAfterEnv: ['./jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@shopify/flash-list|react-native-safe-area-context|react-native-reanimated|react-native-worklets)/)',
  ],
};


