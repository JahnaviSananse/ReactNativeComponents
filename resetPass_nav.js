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
} from 'react-native';

const resetPass_nav = () => {
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const validateReset = () => {
        let isValidate = false;
        let mailFormat = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        );
        let message = '';
         if (pass === '') {
          message = 'please enter your password!';
        } else if (pass.length < 5) {
          isValidate = false;
          message = 'Please add at least 5 charachter.';
        } else if (cpass === '') {
          message = 'please re-enter your password!';
        } else if (pass !== cpass) {
          message = 'password and confirm password must be same!';
        }
        else{
          return true;
        }
    
        if (isValidate === false) {
          alert(message);
        }
      };

  const renderSignup = () => {
    return (
      <View>
        <Text
          style={styles.text}>
          {' '}
          New Password :{' '}
        </Text>

        <TextInput 
         onChangeText={(text) => setPass(text)}
         value={pass}
        placeholder={' Enter Here '} style={styles.textinput} />

        <Text
          style={styles.text}>
          {' '}
          Confirm Password :{' '}
        </Text>

        <TextInput 
         onChangeText={(text) => setCpass(text)}
         value={cpass}
        placeholder={' Enter Here '} style={styles.textinput} />

        <View style={styles.loginButton}>
          <TouchableOpacity onPress={() => {
              if(validateReset()){
              alert("Reset Successfully")}
              }}>
            <Text style={styles.loginText}> SAVE </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View>
        <View
          style={styles.headView}>
          <Image
            style={styles.img}
            source={require('./boy.png')}
          />
          <Text style={styles.loanText}> LoanTack </Text>
        </View>

        <View
          style={styles.resetView}>
          <Text style={styles.resetText}>Reset Password</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        //marginTop: 10,
        height: '100%',
        backgroundColor: 'white',
        //justifyContent: 'center',
      }}>
      {renderTabs()}
      {renderSignup()}
    </SafeAreaView>
  );
};

export default resetPass_nav;

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
    borderWidth: 1.5,
  },
  img:{
    top: 10, 
    marginLeft: 65
  },
  headView:{
    backgroundColor: 'white', 
    height: 90, 
    flexDirection: 'row'
  },
  loanText:{
    fontSize: 40, 
    marginTop: 15
  },
  resetView:{
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  resetText:{
    fontSize: 30, 
    padding: 5
  },
  loginButton: {
    width: '60%',
    marginTop: '30%',
    marginLeft: 50,
    left: 40,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  text:{
    marginTop: 20,
    marginLeft: 9,
    fontSize: 20,
    marginBottom: 10,
  },

  loginText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    left: 85,
  },
});
