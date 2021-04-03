import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
export default class Myproject extends Component {
 constructor(props) {
    super(props);
    this.array = [{
      title: 'Manav Daxini'
    },
    {
      title: 'Priya Agrawal'
    },
    ],
    this.state = {
      arrayHolder: [],
      textInput_Holder: ''
      }
  }
  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] })
  }
 
  joinData = () => {
    this.array.push({title: this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
  }

  GetItem(item) {
    // Alert.alert(item);
    // alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Name Here To Add Into List"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}  
        />
        <TouchableOpacity 
            onPress={this.joinData} 
            style={styles.button}>
            <Text style={styles.buttonText}> ADD </Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.arrayHolder}
          width='100%'
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.item} 
                onPress = {this.GetItem.bind(this, item.title)}> {item.title} 
                </Text> }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
  },

  item: {
    padding: 10,
    fontSize: 19,
    height: 44,
  },
 
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 7,
    marginTop: 12
  },
 
  button: {
    width: '50%',
    height: 40,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 8,
    marginTop: 10
  },
 
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
 
});