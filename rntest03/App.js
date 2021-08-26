import React, {useState} from 'react';
import type {Node} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'milk'},
    {id: 2, text: 'milk2'},
    {id: 3, text: 'milk3t'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({item})=> <ListItem item={item}/>} />
    </View>
  );
};

const styles = StyleSheet.create({
container:{
  
},
});

export default App;
