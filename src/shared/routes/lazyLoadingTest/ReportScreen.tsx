// src/screens/ReportsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TestScreen from './TestScreen';
console.log('ReportsScreen module executed');
const ReportsScreen: React.FC = () => {
  console.log('ReportsScreen Loaded!'); // loads only when tab is clicked
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📊 Reports Screen</Text>
      <TestScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});

export default ReportsScreen;
