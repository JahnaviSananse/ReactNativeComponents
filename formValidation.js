import react from 'react';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FirstPage = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [email_l, setEmail_l] = useState('');
  const [pass_l, setPass_l] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFname] = useState('');
  const [cpass, setCpass] = useState('');

  const validateSignup = () => {
    let isValidate = false;
    let mailFormat = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    let message = '';
    if (fname === '') {
      message = 'please enter your full name!';
    } else if (email === '') {
      message = 'please enter your email address!';
    } else if (!mailFormat.test(email)) {
      isValidate = false;
      message = 'Please enter valid email address.';
    } else if (pass === '') {
      message = 'please enter your password!';
    } else if (pass.length < 5) {
      isValidate = false;
      message = 'Please add at least 5 charachter.';
    } else if (cpass === '') {
      message = 'please re-enter your password!';
    } else if (pass !== cpass) {
      message = 'password and confirm password should be same!';
    }

    if (isValidate === false) {
      alert(message);
    }
  };

  const renderSignup = () => {
    return (
      <View
        style={{
          height: '77%',
          width: '100%',

          //backgroundColor: 'pink',
        }}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TextInput
            onChangeText={(text) => setFname(text)}
            value={fname}
            placeholder={' Enter Your Name '}
            style={styles.textinput}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder={' Enter Your Email '}
            style={styles.textinput}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TextInput
            onChangeText={(text) => setPass(text)}
            value={pass}
            placeholder={' Enter New Password '}
            style={styles.textinput}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TextInput
            onChangeText={(text) => setCpass(text)}
            value={cpass}
            placeholder={' Enter Password Again '}
            style={styles.textinput}
          />
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={() => validateSignup()}>
            <Text style={styles.loginText}> SIGN-UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const validateLogin = () => {
    let isValid = false;
    let message = '';
    let mailFormat = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );

    if (email_l === '') {
      message = 'enter your email';
    } else if (!mailFormat.test(email_l)) {
      isValid = false;

      message = 'Please enter valid email address.';
    } else if (pass_l === '') {
      message = 'please enter password!';
    }

    if (isValid === false) {
      alert(message);
    }
  };

  const renderLogin = () => {
    return (
      <View
        style={{
          height: '60%',
          width: '100%',

          // backgroundColor: 'pink',
        }}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TextInput
            placeholder={' Enter Your Email '}
            style={styles.textinput}
            onChangeText={(text) => setEmail_l(text)}
            value={email_l}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TextInput
            onChangeText={(text) => setPass_l(text)}
            value={pass_l}
            placeholder={' Enter Your Password '}
            style={styles.textinput}
          />
        </View>

        <View style={styles.loginButton}>
          <TouchableOpacity onPress={() => validateLogin()}>
            <Text style={styles.loginText}>LOG-IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View style={{height: 50, width: '100%', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: currentForm === 0 ? 'lightgrey' : 'white',
          }}
          onPress={() => setCurrentForm(0)}>
          <Text style={{fontSize: 30, padding: 5, marginLeft: 40}}>
            SIGN-UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: currentForm === 1 ? 'lightgrey' : 'white',
          }}
          onPress={() => setCurrentForm(1)}>
          <Text style={{fontSize: 30, padding: 5, marginLeft: 50}}>LOG-IN</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      {renderTabs()}
      {currentForm === 0 ? renderSignup() : renderLogin()}
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  loginButton: {
    width: '90%',
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: 'lightblue',
  },
  loginText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    left: 135,
  },
});
