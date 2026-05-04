// src/screens/ReportsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
console.log('TestScreen module executed');
const TestScreen: React.FC = () => {
  console.log('TestScreen Loaded!'); // loads only when tab is clicked
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📊 Test Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});

export default TestScreen;
