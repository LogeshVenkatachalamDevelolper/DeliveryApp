// src/screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  console.log('HomeScreen Loaded!'); // you can see when it loads

  useEffect(() => {
    const startupTime = Date.now() - globalThis.APP_START_TIME;

    console.log('🚀 Startup Time:', startupTime, 'ms');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Reports')}
      >
        <Text style={styles.buttonText}>📊 Go to Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
  button: {},
  buttonText: {},
});

export default HomeScreen;
