import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleStart = async () => {
    await AsyncStorage.setItem('user', JSON.stringify({ name, email }));
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Welcome to Little Lemon</Text>
      <TextInput placeholder="Name" onChangeText={setName} value={name} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <Button title="Get Started" onPress={handleStart} />
    </View>
  );
};

export default OnboardingScreen;
