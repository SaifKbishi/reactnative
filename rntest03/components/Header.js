import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import {Colors, DebugInstructions, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';


const Header = () => {
 
  return (
    <View>
    <Text style={styles.text}>This is the Header</Text>
        
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    color: '#FFF',
    backgroundColor: '#880000',
    height: 60,
    textAlign: 'center',
    justifyContent : 'center',
    paddingTop:15,
    fontSize: 25
  }
});

export default Header;
