import React from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Little Lemon Restaurant</Text>
      <TextInput placeholder="Search food..." />
      <FlatList
        data={[{ id: '1', name: 'Pizza' }, { id: '2', name: 'Pasta' }]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
