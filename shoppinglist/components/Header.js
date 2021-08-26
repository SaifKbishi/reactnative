import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const Header = ()  => {

  return (
    <View style={styles.header}>
    <Text style={styles.text}>wellcome header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    height: 60,
    
    backgroundColor: '#880000',
    alignItems: 'center',
  },
  text:{
    color:'#FFF',
    fontSize: 30,
  },
});

export default Header;
