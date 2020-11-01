import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Dracula, The Blood Sucker', rating: 5, body: 'lorem ipsum datum', key: '1' },
    { title: 'GardenScape, with Edie', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Fast Kim, the Viper', rating: 3, body: 'lorem ipsum crazy stuff', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}