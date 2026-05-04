module.exports = {
  preset: '@react-native/jest-preset',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/types/**',
    '!src/**/enums/**',
    '!src/**/modal/**',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|@shopify/flash-list' +
      ')/)',
  ],
};
