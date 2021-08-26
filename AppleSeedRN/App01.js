
import React, {useState} from 'react'; 
import {View, Text, Image, StyleSheet, FlatList}  from 'react-native';
import Header from './components/Header'
// import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    // {id: uuid(), text: 'milk'},
    // {id: uuid(), text: 'milk'},
  ]);

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList data={items} renderItem={({item})=><Text>{item.text} 2</Text>}/>
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', 
    alignItems: 'center'
  },
  text:{
    color: 'darkslateblue',
    fontSize: 30,
  },
  img: {
    width: 300,
    height: 100,
  },
});


export default App;
