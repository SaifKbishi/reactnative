import React, {useState} from 'react';
import type {Node} from 'react';
import Header from './components/Header'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import {uuid} from 'uuidv4';


const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
  ]);
  return (
    <View>
    <Header />
    <Text>hello 6y</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
