import react from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: 1,
    title: 'Heli : GLS',
  },
  {
    id: 2,
    title: 'Heli Pandya',
  },
  {
    id: 3,
    title: "Hemani Ma'am : GLS",
  },
  {
    id: 4,
    title: 'Hemant Mobile',
  },
  {
    id: 5,
    title: 'Himanshu',
  },
  {
    id: 6,
    title: 'Himatnagar',
  },
  {
    id: 7,
    title: 'Himil : GLS',
  },
  {
    id: 8,
    title: 'Hiren Prajapati',
  },
  {
    id: 9,
    title: 'Idbi',
  },
  {
    id: 10,
    title: 'Irsad',
  },
];

const FirstPage = () => {
  const [userName, setUserName] = useState(data);
  const deleteAddressDetail = (id) => {
    const removeItem = userName.filter((item) => item.id !== id);
    setUserName(removeItem);
  };
  const renderDataList = ({item}) => {
    return (
      <View style={styles.cell}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'yellow',
            borderRadius: 15,
            top: 25,
          }}
        />

        <View style={styles.item}>
          <TouchableOpacity>
            <Text style={styles.title}>{item.title} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const dataList = () => {
    return (
      <View style={styles.cellList}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Button title="<-" color="#841584" />
          <TextInput
            placeholder="Search in 859 contacts"
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 20,
              width: '85%',
            }}
          />
          <Button title="X" color="#841584" />
        </View>
        <View style={{borderBottomWidth: 1.5, width: '100%', top: 15}} />
        <FlatList
          data={data}
          renderItem={renderDataList}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>{dataList()}</ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  cell: {
    //padding: 1,
    //margin: 10,
  },
  cellList: {
    backgroundColor: 'white',
    //marginTop: 10,
    padding: 15,
  },

  item: {
    //flex: 1,
    padding: 5,
    //marginVertical: 10,
    //width: '80%',

    marginHorizontal: 45,
    //backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
  },
});






