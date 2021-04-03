import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const tabLoupe = () => {
  return (
    <View style={styles.loupe} />

  );
};
export default tabLoupe;

const styles = StyleSheet.create({
  loupe:{
    width: '100%', 
    height: '100%', 
    backgroundColor: 'blue'
  },
 
});