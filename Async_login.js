import react from 'react';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

const Async_login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const userInfo = {emailId: 'j@gmail.com', password: 'j12345'};

  const loginAsync = async () => {
    // alert(email)
    if (userInfo.emailId === email && userInfo.password === pass) {
      alert('logged In');
    } else {
      alert('Email or Password not Matched!');
    }
  };

  const validateLogin = () => {
    let isValidate = false;
    let mailFormat = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    let message = '';
    if (email === '') {
      message = 'please enter your email address!';
    } else if (!mailFormat.test(email)) {
      isValidate = false;
      message = 'Please enter valid email address.';
    } else if (pass === '') {
      message = 'please enter your password!';
    } else if (pass.length < 5) {
      isValidate = false;
      message = 'Please add at least 5 charachter.';
    } else {
      return true;
    }

    if (isValidate === false) {
      alert(message);
    }
  };

  const renderLogin = () => {
    return (
      <View>
        <Text style={styles.text}> Email Address : </Text>

        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
          style={styles.textinput}
        />

        <Text style={styles.text}> Password : </Text>

        <TextInput
          onChangeText={(text) => setPass(text)}
          value={pass}
          placeholder={' Enter Here '}
          style={styles.textinput}
        />

        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() => {
              if (validateLogin()) {
                loginAsync();
              }
            }}>
            <Text style={styles.loginText}> LOG IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View>
        <View style={styles.header}>
          <Image style={styles.img} source={require('./boy.png')} />
          <Text style={styles.loanTrackText}> LoanTack </Text>
        </View>
        <View style={styles.lognView}>
          <Text style={styles.loginText}> LOGN-IN </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeView}>
      {renderTabs()}
      {renderLogin()}
    </SafeAreaView>
  );
};

export default Async_login;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  img: {
    top: 10,
    marginLeft: 65,
  },
  safeView: {
    height: '100%',
    backgroundColor: 'white',
  },
  lognView: {
    height: 60,
    marginTop: 35,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 30,
    padding: 5,
  },
  loanTrackText: {
    fontSize: 40,
    marginTop: 15,
  },
  loginButton: {
    width: '40%',
    marginTop: 20,
    marginLeft: 90,
    left: 40,
    backgroundColor: 'green',
    borderRadius: 10,
  },

  loginText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    left: 35,
  },

  text: {
    marginTop: 10,
    marginLeft: 9,
    fontSize: 18,
    marginBottom: 5,
  },
  header: {
    marginTop: 40,
    height: 90,
    flexDirection: 'row',
  },
});
