import React from 'react';
import type {Node} from 'react';
import {TouchableOpacity, Text, View, StyleSheet,} from 'react-native';
import {Colors, DebugInstructions, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';


const ListItem = ({item}) => {
 
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemText:{
    color: '#333',
    height: 60,
    textAlign: 'center',
    justifyContent : 'center',
    paddingTop:15
  }
});

export default ListItem;
