import React from 'react'; 
import {View, Text, Image, StyleSheet, FlatList}  from 'react-native';

const ListItem = () => {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.header}>Hello Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ListItem;