module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!(?:@react-native|react-native|react-native-.*|@react-navigation|@expo|expo(?!-router)|expo-router|expo-modules-core|@reduxjs|immer|react-redux)/)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^expo$": "<rootDir>/jest/mocks/expo.ts",
    "^expo/src/winter$": "<rootDir>/jest/mocks/expo-winter.ts",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  watchman: false,
};
