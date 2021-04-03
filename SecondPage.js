import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const SecondPage = ({navigation}) => {
  const [userName, setUserName] = useState(' ');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Your Item Here"
          value={userName}
          onChangeText={(username) => setUserName(username)}
          style={styles.inputStyle}
        />

        <Button
          title="add to list"
          onPress={() =>
            navigation.navigate('FirstPage', {
              paramKey: userName,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
});
