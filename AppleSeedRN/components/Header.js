
import React from 'react'; 
import {View, Text, Image, StyleSheet}  from 'react-native';

const Header = () => {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.header}>Hello Header</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    
  },
  header:{
    color: '#FFF',
    fontSize: 25,
    height: 60,
    padding: 15,
    backgroundColor: '#880000',
    textAlign: 'center',
  },
});


export default Header;
