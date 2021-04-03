import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const tabUser = () => {
  return (
    <View style={styles.user} />

  );
};
export default tabUser;

const styles = StyleSheet.create({
  user:{
    width: '100%', 
    height: '100%', 
    backgroundColor: 'red'
  }
 
});
